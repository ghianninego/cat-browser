import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// * Components
import { BreedSelection, BreedImages } from 'src/components'

const Card = styled(Col)`
  padding: 12px;
  border: 1px solid #85929e;
  border-radius: 4px;
  min-height: 150px;
  height: ${(props) => (props.height ? props.height : 'auto')};
`

const HomePage: React.FC = () => {
  return (
    <Container>
      <Row className='d-flex gap-4'>
        <Card md={3} height='150px'>
          <BreedSelection />
        </Card>
        <Card>
          <BreedImages />
        </Card>
      </Row>
    </Container>
  )
}

export default HomePage
