import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// * Icons
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <Button variant='secondary' onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon={faChevronLeft} size='xs' /> Back
    </Button>
  )
}

const CatPage: React.FC = () => {
  return (
    <Card>
      <Card.Header>
        <BackButton />
      </Card.Header>
      <Card.Img variant='top' src='holder.js/100px160' />
      <Card.Body>
        <Card.Title as='h3'>Cat Breed</Card.Title>
        <Card.Title as='h5'>Origin: Greece</Card.Title>
        <Card.Title as='h6'>Details</Card.Title>
        <Card.Text>
          Native to the Greek islands known as the Cyclades in the Aegean Sea,
          these are natural cats, meaning they developed without humans getting
          involved in their breeding. As a breed, Aegean Cats are rare.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CatPage
