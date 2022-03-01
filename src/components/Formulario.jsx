import {Formik, Form, Field} from 'formik'

export const Formulario = () => {
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Agregar Cliente</h1>

      <Formik>
        <Form
          className="mt-10"
        >
          <div className="mb-4">
            <label
              className="text-gray-800"
              htmlFor="nombre"
            >Nombre:</label>
            <Field
              id="nombre"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Nombre del Cliente"
            />
          </div>
          <div className="mb-4">
            <label
              className="text-gray-800"
              htmlFor="empresa"
            >Empresa:</label>
            <Field
              id="empresa"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Empresa del Cliente"
            />
          </div>
          <div className="mb-4">
            <label
              className="text-gray-800"
              htmlFor="email"
            >E-mail:</label>
            <Field
              id="email"
              type="email"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Email del Cliente"
            />
          </div>

          <div className="mb-4">
            <label
              className="text-gray-800"
              htmlFor="telefono"
            >Teléfono:</label>
            <Field
              id="telefono"
              type="tel"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Teléfono del Cliente"
            />
          </div>

          <div className="mb-4">
            <label
              className="text-gray-800"
              htmlFor="notas"
            >Notas:</label>
            <Field
              as="textarea"
              id="notas"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50 h-30"
              placeholder="Notas del Cliente"
            />

            <input 
              type="submit"
              value="Agregar Cliente"
              className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
            />
          </div>
        </Form>
      </Formik>
    </div>
  )
}



