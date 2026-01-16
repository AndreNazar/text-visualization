import { useRef, type Dispatch, type SetStateAction } from 'react'
import { usePixiApp } from '../model/hooks/usePixiApp'
import { useVisualPoints } from '../model/hooks/useVisualPoints'
import type { PointType } from '@entities/Point'

function VisualizationCanvasComponent({
  visualPoints,
  setVisualPoints,
  setLabelsClusters,
}: {
  visualPoints: PointType[]
  setVisualPoints: Dispatch<SetStateAction<PointType[]>>
  setLabelsClusters: Dispatch<SetStateAction<number[]>>
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useVisualPoints(setVisualPoints, setLabelsClusters)
  usePixiApp(containerRef, visualPoints)

  return <div ref={containerRef} />
}

export const VisualizationCanvas = VisualizationCanvasComponent
