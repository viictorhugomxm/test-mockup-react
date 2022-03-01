import { FormCheck } from '../components/FormCheck';

export const Catalogos = () => {
  return (
    <>
      <div className="flex flex-col justify-start p-5">
      <h1>Catalogos</h1>
        <div className="h-full flex flex-col items-center justify-around">
          <FormCheck />
          <FormCheck />
          <FormCheck />
          <FormCheck />
          <FormCheck />
          <FormCheck />
        </div>
      </div>
    </>
  )
}
