import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

// * Providers
import { CatStoreProvider } from './providers'

// * Components
import { Header } from 'src/components'

const Content = styled(Container)`
  padding: 90px 10px 10px 10px;
`

const App = () => {
  return (
    <>
      <Header />
      <Content>
        <CatStoreProvider>
          <div></div>
        </CatStoreProvider>
      </Content>
    </>
  )
}

export default App
