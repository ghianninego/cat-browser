import { useContext } from 'react'

// * Contexts
import { ErrorAlertContext } from 'src/contexts'

export const useRequestHandler = () => {
  const errorAlert = useContext(ErrorAlertContext)

  return async (callback: () => Promise<void | unknown>) => {
    try {
      return await callback()
    } catch (e) {
      errorAlert?.show()
    }
  }
}
