import { UMAP } from 'umap-js'

let seed = 3463340
function fixedRandom() {
  seed = (seed * 9301 + 49297) % 233280
  return seed / 233280
}

export function embeddingsTo2D(embeddings: number[][]) {
  const model = new UMAP({
    random: fixedRandom,
  })

  const result = model.fit(embeddings)

  return result.map(([x, y]) => ({ x, y }))
}
