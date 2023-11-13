import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// * Icons
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

// * Hooks
import { useCats } from 'src/hooks'

type TBreed = {
  id: string
  name: string
  origin: string
  temperament: string
  description: string
}

type TResult = {
  id: string
  url: string
  breeds: TBreed[]
}

const BackButton = ({ breedId }: { breedId?: string }) => {
  const navigate = useNavigate()
  const url = breedId ? `/?breed=${breedId}` : '/'

  return (
    <Button variant='secondary' onClick={() => navigate(url)}>
      <FontAwesomeIcon icon={faChevronLeft} size='xs' /> Back
    </Button>
  )
}

const CatPage: React.FC = () => {
  const { imgId } = useParams()
  const { getSingleCatImage } = useCats()

  const [imageUrl, setImageUrl] = useState<string | undefined>()
  const [details, setDetails] = useState<TBreed | undefined>()

  useEffect(() => {
    const getImageUrl = async () => {
      if (imgId) {
        const result = (await getSingleCatImage(imgId)) as TResult
        setImageUrl(result?.url)
        setDetails(result?.breeds?.[0])
      }
    }

    getImageUrl()
  }, [imgId]) // eslint-disable-line

  return (
    <Card>
      <Card.Header>
        <BackButton breedId={details?.id} />
      </Card.Header>
      <Card.Img variant='top' src={imageUrl} loading='lazy' />
      <Card.Body>
        <Card.Title as='h3'>{details?.name}</Card.Title>
        <Card.Title as='h5'>Origin: {details?.origin}</Card.Title>
        <Card.Title as='h6'>{details?.temperament}</Card.Title>
        <Card.Text>{details?.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CatPage
