import { useMemo, useState } from 'react'

import { ErrorAlertContext } from 'src/contexts'
import { ErrorAlert } from 'src/components'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ErrorAlertProvider = ({ children }: any) => {
  const [show, setShow] = useState(false)

  const alert = useMemo(
    () => ({
      show: () => setShow(true),
      hide: () => setShow(false)
    }),
    []
  )

  return (
    <>
      <ErrorAlert show={show} setShow={setShow} />
      <ErrorAlertContext.Provider value={alert}>
        {children}
      </ErrorAlertContext.Provider>
    </>
  )
}
