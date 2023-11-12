import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

// * Hooks
import { useCatsApi, useStore } from 'src/hooks'

type TImgDetail = {
  id: string
  url: string
}

type TImage = {
  list: TImgDetail[] | null
  totalCount: number
  currentCount: number
}

const CardDetails = ({ id, url }: TImgDetail) => {
  const navigate = useNavigate()
  const { setActiveImage } = useStore()

  const onClick = () => {
    setActiveImage(id)
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

const DisplayList = ({
  images,
  canLoadMore,
  onLoadMore
}: {
  images: TImgDetail[]
  canLoadMore: boolean
  onLoadMore: () => Promise<void>
}) => (
  <div>
    <Row xs={1} md={2} lg={3} className='g-4'>
      {images.map(({ id, url }: TImgDetail, idx: number) => (
        <Col key={idx}>
          <CardDetails id={id} url={url} />
        </Col>
      ))}
    </Row>
    {canLoadMore && (
      <Button variant='success' onClick={onLoadMore}>
        Load more
      </Button>
    )}
  </div>
)

export const CatsList = () => {
  const { activeBreed } = useStore()
  const { getBreedImages } = useCatsApi()

  const [currentPage, setCurrentPage] = useState(1)
  const [images, setImages] = useState<TImage>({
    list: [],
    totalCount: 0,
    currentCount: 0
  })

  const fetchImages = async (initialFetch: boolean = false) => {
    if (activeBreed) {
      const page = !initialFetch ? currentPage : 1

      if (initialFetch) {
        setImages({ ...images, list: null })
        setCurrentPage(1)
      }

      const {
        list: newList,
        totalCount = 0,
        currentCount = 0
      } = (await getBreedImages(activeBreed, page)) || {}

      setImages({
        list: initialFetch ? newList : [...(images.list ?? []), ...newList],
        totalCount,
        currentCount
      })

      const newPage = totalCount > currentCount ? page + 1 : -1
      setCurrentPage(newPage)
    }
  }

  useEffect(() => {
    fetchImages(true)
  }, [activeBreed]) // eslint-disable-line

  if (images?.list === null) return <p>Loading...</p>

  return images?.list?.length > 0 ? (
    <DisplayList
      images={images.list}
      canLoadMore={currentPage > 0}
      onLoadMore={() => fetchImages(false)}
    />
  ) : (
    <p>No cat pictures available.</p>
  )
}
