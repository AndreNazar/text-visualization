import { VisualizationCanvas } from '@features/VisualizationCanvas'
import { memo, useState } from 'react'
import styles from './VisualizationPage.module.scss'
import type { PointType } from '@entities/Point'
import { VisualizationInfo } from '@widgets/VisualizationInfo'

function VisualizationPageComponent() {
  const [visualPoints, setVisualPoints] = useState<PointType[]>([])
  const [labelsClusters, setLabelsClusters] = useState<number[]>([])
  return (
    <div className={styles.container}>
      <VisualizationCanvas
        visualPoints={visualPoints}
        setVisualPoints={setVisualPoints}
        setLabelsClusters={setLabelsClusters}
      />
      <VisualizationInfo visualPoints={visualPoints} labelsClusters={labelsClusters} />
    </div>
  )
}
const VisualizationPage = memo(VisualizationPageComponent)
export default VisualizationPage
