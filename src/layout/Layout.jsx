import {Outlet} from 'react-router-dom';
import { Aside } from './Aside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Avatar from '../img/avatar.jpg'

export const Layout = () => {


  return (
    <div className="md:flex md:min-h-screen">

      <Aside />
      

      <div className="md:w-3/4 md:h-screen overflow-scroll">
        <header className="flex m-0 color-fondo h-20">
          <div className="flex justify-end w-full items-center">
            <div className="text-white text-2xl mr-12 borde-derecho padding-derecho">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="img-chica">
              <img src={Avatar} alt="Avatar" className="max-w-full h-auto rounded-full" />
            </div>
            <div className="padding-derecho">
              <p className="text-pequenio text-white">Adrian Stefan</p>
              <p className="text-pequenio text-white">Recursos Humanos</p>
            </div>
            <div className="text-white text-2xl mr-12">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </div>
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  )
}
