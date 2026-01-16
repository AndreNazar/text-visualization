import type { PointType } from '@entities/Point'
import { memo } from 'react'
import styles from './VisualizationInfo.module.scss'
import { getCountClusters } from '../../lib/helpers/getCountClusters'
import { calculateBigCluster } from '@widgets/VisualizationInfo/lib/helpers/calculateBigCluster'
import { getColorPoints } from '@lib/helpers/getColorPoints'
import { getAvgTextCount } from '../../lib/helpers/getAvgTextCount'
import { getKeyWords } from '@widgets/VisualizationInfo/lib/helpers/getKeyWords'
import { Button } from '@ui/Button'
import { useNavigate } from 'react-router-dom'

function VisualizationInfoComponent({
  visualPoints,
  labelsClusters,
}: {
  visualPoints: PointType[]
  labelsClusters: number[]
}) {
  const bigCluster = calculateBigCluster(labelsClusters)
  const navigate = useNavigate()

  const goToStart = () => navigate('/start')
  const goToHistory = () => navigate('/history')

  return (
    <div className={styles.container}>
      <h4>Статистика</h4>
      <p>
        Точки: <span>{visualPoints.length}</span>
      </p>
      <p>
        Кластеры: <span>{getCountClusters(labelsClusters)}</span>
      </p>
      <p>
        Самый большой кластер:{' '}
        <span
          style={{
            display: 'inline-block',
            backgroundColor: '#' + getColorPoints(bigCluster.index).toString(16),
            width: '10px',
            height: '10px',
          }}
          className={styles.big_cluster}
        ></span>
        <span>{bigCluster.count} точ.</span>
      </p>
      <p>
        Одиночки: <span>{labelsClusters.filter(l => l === -1).length} точ.</span>
      </p>
      <p>
        Средняя длина текста: <span>~{getAvgTextCount(visualPoints).toFixed()} слов</span>
      </p>
      <p>
        Топ слов: <span>{getKeyWords(visualPoints).map(([w, count]) => w + `(${count}), `)}</span>
      </p>
      <div className={styles.controls}>
        <Button size="small" onClick={goToStart}>
          Другой запрос
        </Button>
        <Button size="small" onClick={goToHistory}>
          История
        </Button>
      </div>
    </div>
  )
}

export const VisualizationInfo = memo(VisualizationInfoComponent)
