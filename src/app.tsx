import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

// * Providers
import { ErrorAlertProvider, CatStoreProvider } from './providers'

// * Components
import { Header } from 'src/components'
import HomePage from 'src/pages/home-page'
import CatPage from 'src/pages/cat-page'

const Content = styled(Container)`
  padding: 90px 10px 10px 10px;
`

const App = () => {
  return (
    <>
      <Header />
      <Content>
        <ErrorAlertProvider>
          <CatStoreProvider>
            <Router>
              <Routes>
                <Route path='/:imgId' element={<CatPage />} />
                <Route path='/' element={<HomePage />} />
                <Route path='*' element={<Navigate to='/' replace />} />
              </Routes>
            </Router>
          </CatStoreProvider>
        </ErrorAlertProvider>
      </Content>
    </>
  )
}

export default App
