import { lazy } from 'react'

const HistoryPageLazy = lazy(() => import('./HistoryPage'))

export { HistoryPageLazy as HistoryPage }
