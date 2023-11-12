import { createContext, SetStateAction, Dispatch } from 'react'

export type TBreed = {
  id: string
  name: string
}

export type TCatStore = {
  breeds: TBreed[] | null
  setBreeds: Dispatch<SetStateAction<TBreed[] | null>>
  activeBreed: string | null
  setActiveBreed: Dispatch<SetStateAction<string | null>>
  activeImage: string | null
  setActiveImage: Dispatch<SetStateAction<string | null>>
}

export const CatStoreContext = createContext<TCatStore>({
  breeds: null,
  setBreeds: () => {},
  activeBreed: null,
  setActiveBreed: () => {},
  activeImage: null,
  setActiveImage: () => {}
})
