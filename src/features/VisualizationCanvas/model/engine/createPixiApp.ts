import {
  HEIGHT_VISUALIZATION_CANVAS,
  WIDTH_VISUALIZATION_CANVAS,
} from '@features/VisualizationCanvas/lib/constants/layout.constant'
import { Application } from 'pixi.js'

export async function createPixiApp(container: HTMLDivElement) {
  const app = new Application()
  await app.init({
    width: WIDTH_VISUALIZATION_CANVAS,
    height: HEIGHT_VISUALIZATION_CANVAS,
    backgroundColor: 0xa4a4a4,
    antialias: true,
    resolution: window.devicePixelRatio || 2,
    autoDensity: true,
  })

  container.appendChild(app.canvas)
  return app
}
