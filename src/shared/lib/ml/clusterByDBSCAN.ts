import { DBSCAN } from 'density-clustering'

export function clusterByDBSCAN(points: { x: number; y: number }[]) {
  const dataset = points.map(p => [p.x, p.y])
  const dbscan = new DBSCAN()

  const clusters = dbscan.run(dataset, 0.15, 2)

  const labels = new Array(points.length).fill(-1)

  clusters.forEach((cluster, clusterIndex) => {
    cluster.forEach(pointIndex => {
      labels[pointIndex] = clusterIndex
    })
  })

  return labels
}
