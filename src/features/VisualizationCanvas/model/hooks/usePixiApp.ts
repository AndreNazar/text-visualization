import type { Application } from 'pixi.js'
import { useEffect, useRef, type RefObject } from 'react'
import { createPixiApp } from '../engine/createPixiApp'
import { createPixiViewport } from '../engine/createPixiViewport'
import { createPixiTooltip } from '../engine/createPixiTooltip'
import { createPixiDot } from '../engine/createPixiDot'
import type { DotType } from '../../types/dot.types'

export function usePixiApp(containerRef: RefObject<HTMLDivElement | null>, dots: DotType[] = []) {
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

      const viewport = createPixiViewport(app)
      const tooltip = createPixiTooltip(app)

      dots.forEach(dot => {
        createPixiDot(tooltip, viewport, dot.x, dot.y, dot.color, dot.text)
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
  }, [containerRef])
}
