import { useState } from 'react'

import { CatStoreContext, TBreed } from 'src/contexts'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CatStoreProvider = ({ children }: any) => {
  const [breeds, setBreeds] = useState<TBreed[] | null>(null)
  const [activeBreed, setActiveBreed] = useState<string | null>(null)

  return (
    <CatStoreContext.Provider
      value={{
        breeds,
        setBreeds,
        activeBreed,
        setActiveBreed
      }}
    >
      {children}
    </CatStoreContext.Provider>
  )
}
