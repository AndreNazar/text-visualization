import { lazy } from 'react'

const VisualizationPageLazy = lazy(() => import('./VisualizationPage'))

export { VisualizationPageLazy as VisualizationPage }
