export function getCountClusters(clusters: number[]) {
  const unique = [...new Set(clusters.filter(l => l !== -1))]
  return unique.length
}
