import { Viewport } from 'pixi-viewport'
import type { Application } from 'pixi.js'

export function createPixiViewport(app: Application) {
  const viewport = new Viewport({
    events: app.renderer.events,
  })

  viewport.drag().pinch().wheel().decelerate()
  viewport.clampZoom({ minHeight: 200, maxWidth: 10000 })
  viewport.setZoom(0.7, true)

  app.stage.addChild(viewport)
  return viewport
}
