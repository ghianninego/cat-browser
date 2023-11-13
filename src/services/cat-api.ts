import axios from 'axios'

const headers = { 'x-api-key': import.meta.env.VITE_API_KEY }

export const getBreeds = async () => {
  const url = 'https://api.thecatapi.com/v1/breeds'
  return await axios.get(url, { headers })
}

export const getImages = async (
  breedId: string,
  page: number = 1,
  limit: number = 10
) => {
  const url = 'https://api.thecatapi.com/v1/images/search'
  return await axios.get(url, {
    headers,
    params: { page, limit, breed_ids: breedId }
  })
}
