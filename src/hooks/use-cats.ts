// * Other hooks
import { useStore } from '.'
import { useRequestHandler } from './use-request-handler'

// * Services
import { catApi } from 'src/services'

export const useCats = () => {
  const { setBreeds } = useStore()

  const requestHandler = useRequestHandler()

  const getListOfBreeds = async () =>
    await requestHandler(async () => {
      const response = await catApi.getBreeds()
      setBreeds(response?.data ?? [])
    })

  const getBreedImages = async (breedId: string, page: number = 1) => {
    let res = { list: [], totalCount: 0, currentCount: 0 }

    await requestHandler(async () => {
      const limit = 10
      const response = await catApi.getImages(breedId, page, limit)

      res = {
        list: response?.data ?? [],
        totalCount: Number(response.headers['pagination-count']) ?? 0,
        currentCount: (page - 1) * limit + response?.data?.length ?? 0
      }
    })

    return res
  }

  return {
    getListOfBreeds,
    getBreedImages
  }
}
