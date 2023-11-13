import { useState } from 'react'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

// * Components
import { ImageCard } from './image-card'

// * Types
import type { TImageDetail } from './types'

export const DisplayList = ({
  images,
  showLoadButton,
  loadMoreImages
}: {
  images: TImageDetail[]
  showLoadButton: boolean
  loadMoreImages: () => Promise<void>
}) => {
  const [isLoading, setLoading] = useState(false)

  const onLoadClick = async () => {
    setLoading(true)
    await loadMoreImages()
    setLoading(false)
  }

  if (images.length === 0) return <p>No cat pictures available.</p>

  return (
    <div>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {images.map(({ id, url }: TImageDetail, idx: number) => (
          <Col key={idx}>
            <ImageCard id={id} url={url} />
          </Col>
        ))}
      </Row>

      <br />
      {showLoadButton && (
        <Button variant='success' disabled={isLoading} onClick={onLoadClick}>
          {isLoading ? 'Loading…' : 'Load more'}
        </Button>
      )}
    </div>
  )
}
