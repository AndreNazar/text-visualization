import type { Viewport } from 'pixi-viewport'
import { Graphics } from 'pixi.js'
import type { TooltipType } from '../../types/tooltip.types'

export function createPixiDot(
  tooltip: TooltipType,
  viewport: Viewport,
  x: number,
  y: number,
  color: number,
  text: string,
) {
  const dot = new Graphics().circle(0, 0, 5).fill(color).stroke({ width: 1, color: 0x000000 })

  dot.position.set(x, y)

  dot.eventMode = 'static'

  dot.onpointerenter = () => {
    dot.clear()
    dot.circle(0, 0, 10).fill(color).stroke({ width: 1, color: 0x000000 })
  }
  dot.onpointerleave = () => {
    dot.clear()
    dot.circle(0, 0, 5).fill(color).stroke({ width: 1, color: 0x000000 })
    tooltip.hide()
  }

  dot.onpointermove = event => {
    const pos = event.global
    tooltip.show(text, pos.x + 15, pos.y - 25)
  }

  viewport.addChild(dot)
  return dot
}
