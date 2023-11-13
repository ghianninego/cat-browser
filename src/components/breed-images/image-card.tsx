import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

// * Types
import type { TImageDetail } from './types'

export const ImageCard = ({ id, url }: TImageDetail) => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(`/${id}`)
  }

  return (
    <Card>
      <Card.Img variant='top' src={url} />
      <Card.Body>
        <Button variant='primary' onClick={onClick}>
          View details
        </Button>
      </Card.Body>
    </Card>
  )
}
