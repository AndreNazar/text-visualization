import type { Application } from 'pixi.js'
import { useEffect, useRef, type RefObject } from 'react'
import { createPixiApp } from '../engine/createPixiApp'
import { createPixiViewport } from '../engine/createPixiViewport'
import { createPixiTooltip } from '../engine/createPixiTooltip'
import { createPixiDot } from '../engine/createPixiDot'
import type { PointType } from '@/entities/Point/types/Point.type'

export function usePixiApp(containerRef: RefObject<HTMLDivElement | null>, dots: PointType[] = []) {
  const appRef = useRef<Application | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || appRef.current) return

    let destroyed = false

    const init = async () => {
      const app = await createPixiApp(container)
      if (destroyed) {
        app.destroy(true)
        return
      }

      appRef.current = app

      if (dots.length === 0) return
      const viewport = createPixiViewport(app, dots[0].x * 100, dots[0].y * 100)
      const tooltip = createPixiTooltip(app)

      dots.forEach(dot => {
        createPixiDot(tooltip, viewport, dot.x * 100, dot.y * 100, dot.color || 0xff0000, dot.text)
      })
    }

    init()

    return () => {
      destroyed = true

      if (appRef.current) {
        appRef.current.destroy(true)
        appRef.current = null
      }
    }
  }, [containerRef, dots])
}
