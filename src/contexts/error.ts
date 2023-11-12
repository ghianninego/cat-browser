import { createContext } from 'react'

export type ErrorAlertType = {
  show: () => void
  hide: () => void
}

export const ErrorAlertContext = createContext<ErrorAlertType | null>(null)
