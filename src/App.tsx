import { HashRouter, Route, Routes } from 'react-router-dom'
import { GetStartedPage } from './pages/GetStartedPage'
import { HomePage } from './pages/HomePage'
import { VisualisationPage } from '@pages/VisualisationPage'
import { Text } from '@ui/Text'

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
        <Route path="/visualization" element={<VisualisationPage />} />
        <Route path="/start" element={<GetStartedPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
