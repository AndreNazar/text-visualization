import { useRef } from 'react'
import {
  HEIGHT_VISUALIZATION_CANVAS,
  WIDTH_VISUALIZATION_CANVAS,
} from '../lib/constants/layout.constant'
import { usePixiApp } from '../model/hooks/usePixiApp'
import type { PointType } from '@/entities/Point/types/Point.type'

function VisualizationCanvasComponent({ visualPoints }: { visualPoints: PointType[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  usePixiApp(containerRef, visualPoints)

  return (
    <div
      ref={containerRef}
      style={{
        width: `${WIDTH_VISUALIZATION_CANVAS}px`,
        height: `${HEIGHT_VISUALIZATION_CANVAS}px`,
      }}
    />
  )
}

export const VisualizationCanvas = VisualizationCanvasComponent
