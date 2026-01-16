import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { GetStartedPage } from './pages/GetStartedPage'
import { HomePage } from './pages/HomePage'
import { Text } from '@ui/Text'
import { VisualizationPage } from '@pages/VisualizationPage'
import { HistoryPage } from '@pages/HistoryPage'

function App() {
  return (
    <HashRouter>
      <div style={{ marginTop: '40px' }}>
        <Text size={42} weight={500}>
          Context Atlas
        </Text>
        <Text>Визуальный атлас текстов</Text>
      </div>
      <Routes>
        <Route path="/visualization/:id" element={<VisualizationPage />} />
        <Route path="/start" element={<GetStartedPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  )
}

export default App
