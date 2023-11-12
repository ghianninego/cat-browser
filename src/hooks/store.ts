import { useContext } from 'react'

// * Contexts
import { CatStoreContext } from 'src/contexts'

export const useStore = () => {
  const context = useContext(CatStoreContext)
  if (!context) {
    throw new Error('CatStoreContext not initialized')
  }
  return context
}
