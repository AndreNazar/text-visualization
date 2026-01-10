import { Container, Graphics, Text, type Application } from 'pixi.js'
import type { TooltipType } from '../../types/tooltip.types'

export function createPixiTooltip(app: Application): TooltipType {
  const tooltip = new Container()
  tooltip.visible = false

  const tooltipBg = new Graphics()
  tooltipBg.roundRect(0, 0, 300, 50, 2).fill(0xffffff)

  const tooltipText = new Text({
    text: 'Tooltip',
    style: {
      fontSize: 12,
      fill: 0x000000,
      wordWrap: true,
      wordWrapWidth: 300,
    },
  })
  tooltipText.position.set(8, 6)
  tooltip.addChild(tooltipBg, tooltipText)
  app.stage.addChild(tooltip)

  return {
    show(content: string, x: number, y: number) {
      tooltipText.text = content
      tooltip.position.set(x, y)
      tooltip.visible = true
    },
    hide() {
      tooltip.visible = false
    },
  }
}
