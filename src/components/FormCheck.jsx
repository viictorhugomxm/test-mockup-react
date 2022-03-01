import Avatar from '../img/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faNoteSticky,faTrash,faEye} from '@fortawesome/free-solid-svg-icons';

export const FormCheck = () => {
  return (
    <div className="form-check flex justify-between items-center  mb-8">
      <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
      <div className="img-mediana">
        <img src={Avatar} alt="Avatar" className="max-w-full h-auto rounded-full" />
      </div>
      <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        Cheyenne Korsgaard
      </label>
      <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        Recursos Humanos
      </label>
      <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        correo@gmail.com
      </label>
      <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        activo
      </label>
      <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        <FontAwesomeIcon icon={faNoteSticky} />
        <FontAwesomeIcon icon={faTrash} />
        <FontAwesomeIcon icon={faEye} />
      </label>
    </div>
  )
}
