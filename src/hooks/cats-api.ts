import { useContext } from 'react'
import axios from 'axios'

// * Contexts
import { ErrorAlertContext } from 'src/contexts'

// * Other hooks
import { useStore } from '.'

const headers = { 'x-api-key': import.meta.env.VITE_API_KEY }

export const useCatsApi = () => {
  const errorAlert = useContext(ErrorAlertContext)
  const { setBreeds } = useStore()

  const getListOfBreeds = async () => {
    try {
      const url = 'https://api.thecatapi.com/v1/breeds'
      const response = await axios.get(url, { headers })
      setBreeds(response?.data ?? [])
    } catch (e) {
      errorAlert?.show()
    }
  }

  const getBreedImages = async (breedId: string, page: number = 1) => {
    const limit = 10

    try {
      const url = `https://api.thecatapi.com/v1/images/search?page=${page}&limit=${limit}&breed_ids=${breedId}`
      const response = await axios.get(url, { headers })
      const totalCount = Number(response.headers['pagination-count']) ?? 0
      const currentCount = (page - 1) * limit + response?.data?.length ?? 0

      return {
        list: response?.data ?? [],
        totalCount,
        currentCount
      }
    } catch (e) {
      errorAlert?.show()
    }
  }

  return {
    getListOfBreeds,
    getBreedImages
  }
}
