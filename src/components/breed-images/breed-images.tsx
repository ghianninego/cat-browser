import { useEffect, useState } from 'react'

// * Components
import { DisplayList } from './display-list'

// * Hooks
import { useCats, useStore } from 'src/hooks'

// * Types
import type { TImage } from './types'

export const BreedImages = () => {
  const { activeBreed } = useStore()
  const { getBreedImages } = useCats()

  const [currentPage, setCurrentPage] = useState(1)
  const [images, setImages] = useState<TImage>({
    list: [],
    totalCount: 0,
    currentCount: 0
  })

  const getNewCurrentPage = (
    totalCount: number,
    currentCount: number,
    page: number
  ) => {
    const newPage = totalCount > currentCount ? page + 1 : -1
    setCurrentPage(newPage)
  }

  const loadMoreImages = async () => {
    if (activeBreed) {
      const {
        list: newList,
        totalCount = 0,
        currentCount = 0
      } = await getBreedImages(activeBreed, currentPage)

      setImages({
        list: [...(images.list ?? []), ...newList],
        totalCount,
        currentCount
      })
      getNewCurrentPage(totalCount, currentCount, currentPage)
    }
  }

  useEffect(() => {
    const initialize = async () => {
      if (activeBreed) {
        setImages({ ...images, list: null })
        setCurrentPage(1)

        const result = await getBreedImages(activeBreed, 1)
        setImages(result)
        getNewCurrentPage(result.totalCount, result.currentCount, 1)
      }
    }

    initialize()
  }, [activeBreed]) // eslint-disable-line

  if (images?.list === null) return <p>Loading...</p>

  return (
    <DisplayList
      images={images?.list ?? []}
      showLoadButton={currentPage > 0}
      loadMoreImages={loadMoreImages}
    />
  )
}
