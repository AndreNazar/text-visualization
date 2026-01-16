import { Viewport } from 'pixi-viewport'
import type { Application } from 'pixi.js'

export function createPixiViewport(app: Application, initPosX = 0, initPosY = 0) {
  const viewport = new Viewport({
    events: app.renderer.events,
    allowPreserveDragOutside: true,
  })

  viewport.pinch().wheel().decelerate().drag()
  viewport.clampZoom({ minHeight: 10, maxWidth: 5000 })
  viewport.setZoom(3)
  viewport.moveCenter(initPosX, initPosY)

  app.stage.addChild(viewport)
  return viewport
}
