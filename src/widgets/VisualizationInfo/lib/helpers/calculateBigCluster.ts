export function calculateBigCluster(clusters: number[]) {
  const bigCluster = { index: -1, count: 0 }
  const unique = new Map()

  for (const cluster of clusters) {
    if (cluster === -1) continue
    unique.set(cluster, (unique.get(cluster) || 0) + 1)
  }

  for (const [index, count] of unique) {
    if (count > bigCluster.count) {
      bigCluster.index = index
      bigCluster.count = count
    }
  }
  return bigCluster
}
