import { lazy } from 'react'

const VisualisationPageLazy = lazy(() => import('./VisualisationPage'))

export { VisualisationPageLazy as VisualisationPage }
