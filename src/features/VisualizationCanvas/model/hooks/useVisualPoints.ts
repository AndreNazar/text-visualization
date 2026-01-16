import type { PointType } from '@entities/Point'
import { clusterByDBSCAN } from '@lib/ml/clusterByDBSCAN'
import { embeddingsTo2D } from '@lib/ml/embeddingsTo2D'
import { useEffect, type Dispatch, type SetStateAction } from 'react'
import { getColorPoints } from '../../../../shared/lib/helpers/getColorPoints'
import { getFileFromDB } from '@api/indexedDB/files'
import { useNavigate, useParams } from 'react-router-dom'
import type { RowType } from '@entities/Row'

export function useVisualPoints(
  setVisualPoints: Dispatch<SetStateAction<PointType[]>>,
  setLabelsClusters: Dispatch<SetStateAction<number[]>>,
) {
  const visualId = useParams().id
  const navigate = useNavigate()

  useEffect(() => {
    if (!visualId) return
    getFileFromDB(visualId)
      .then(res => res.file.text())
      .then(fileText => {
        const content = JSON.parse(fileText) as { items: RowType[] }
        const items = content.items
        const embeddings = items.map(item => item.embedding)
        const points2D = embeddingsTo2D(embeddings)
        const clusters = clusterByDBSCAN(points2D)

        setLabelsClusters(clusters)
        setVisualPoints(
          items.map((item, index) => {
            const { id, text } = item
            return {
              id,
              text,
              x: points2D[index].x,
              y: points2D[index].y,
              color: getColorPoints(clusters[index]),
            }
          }),
        )
      })
      .catch(() => {
        navigate('/start')
      })
  }, [visualId, navigate, setVisualPoints])
}
