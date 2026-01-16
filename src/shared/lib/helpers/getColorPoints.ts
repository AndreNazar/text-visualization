export function getColorPoints(clusterIndex: number): number {
  if (clusterIndex === -1) return 0xffffff

  const goldenRatioConjugate = 0.618033988749895
  const hue = (clusterIndex * goldenRatioConjugate * 360) % 360

  const saturation = 0.6 + Math.sin(clusterIndex * 0.3) * 0.2
  const lightness = 0.5 + Math.cos(clusterIndex * 0.5) * 0.1

  const c = (1 - Math.abs(2 * lightness - 1)) * saturation
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1))
  const m = lightness - c / 2

  let r = 0,
    g = 0,
    b = 0

  if (hue < 60) {
    r = c
    g = x
    b = 0
  } else if (hue < 120) {
    r = x
    g = c
    b = 0
  } else if (hue < 180) {
    r = 0
    g = c
    b = x
  } else if (hue < 240) {
    r = 0
    g = x
    b = c
  } else if (hue < 300) {
    r = x
    g = 0
    b = c
  } else {
    r = c
    g = 0
    b = x
  }

  const red = Math.round((r + m) * 255)
  const green = Math.round((g + m) * 255)
  const blue = Math.round((b + m) * 255)

  return (red << 16) | (green << 8) | blue
}
