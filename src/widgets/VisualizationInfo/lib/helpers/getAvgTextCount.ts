import type { PointType } from '@entities/Point'

export function getAvgTextCount(points: PointType[]) {
  const sum = points.reduce((acc, point) => acc + point.text.split(/\s+/).length, 0)
  return sum / points.map(point => point.text.split(/\s+/)).length
}
