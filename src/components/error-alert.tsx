import Alert from 'react-bootstrap/Alert'

type TErrorAlert = {
  show: boolean
  setShow: (x: boolean) => void
}

export const ErrorAlert = ({ show, setShow }: TErrorAlert) => {
  return show ? (
    <Alert
      key='danger'
      variant='danger'
      onClose={() => setShow(false)}
      dismissible
    >
      Apologies but we could not load new cats for you at this time! Miau!
    </Alert>
  ) : null
}
