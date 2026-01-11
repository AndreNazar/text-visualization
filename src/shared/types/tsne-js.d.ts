declare module 'tsne-js' {
  export class TSNE {
    constructor(options: {
      dim?: number
      perplexity?: number
      earlyExaggeration?: number
      learningRate?: number
      nIter?: number
      metric?: 'euclidean' | 'cosine'
    })

    init(options: { data: number[][]; type?: 'dense' }): void

    run(): void

    getOutput(): number[][]

    getOutputScaled(): number[][]
  }
}
