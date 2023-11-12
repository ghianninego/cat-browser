import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Placeholder from 'react-bootstrap/Placeholder'

// * Hooks
import { useCatsApi, useStore } from 'src/hooks'

// * Types
import { type TBreed } from 'src/contexts'

export const BreedSelection = () => {
  const { getListOfBreeds } = useCatsApi()
  const { breeds, activeBreed, setActiveBreed } = useStore()

  const [searchParams] = useSearchParams()

  const onSelectBreed = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    const newValue = value === '-1' ? null : value
    setActiveBreed(newValue)
  }

  useEffect(() => {
    getListOfBreeds()
  }, []) // eslint-disable-line

  useEffect(() => {
    const breed = searchParams.get('breed') ?? null
    setActiveBreed(breed)
  }, [searchParams]) // eslint-disable-line

  return (
    <>
      <Form.Label>Breed</Form.Label>
      {breeds === null ? (
        <Placeholder as='p' animation='wave'>
          <Placeholder.Button xs={12} variant='secondary' />
        </Placeholder>
      ) : (
        <Form.Select
          aria-label='Breed'
          defaultValue={activeBreed ?? undefined}
          onChange={onSelectBreed}
        >
          <option value={-1}>Select Breed...</option>
          {breeds.map(({ id, name }: TBreed) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Form.Select>
      )}
    </>
  )
}
