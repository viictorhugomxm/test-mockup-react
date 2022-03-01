import {Link, useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBook, faUsers, faAppleWhole, faCalendar, faTriangleExclamation, faChartLine} from '@fortawesome/free-solid-svg-icons'

export const Aside = () => {

  const location = useLocation();

  const urlActual = location.pathname;

  return (
    <div className="md:w-1/4 bg-white px-5 py-10">
      <h2 className="text-4xl font-black color-fuente text-center">GLI</h2>
      
      <nav className="mt-10">

        <Link 
          to="/administradores"
          className={`${urlActual === '/administradores' ? 'text-blue-300' : 'text-black'} text-xl block mt-2 hover:color-fuente mb-2`}
        > <FontAwesomeIcon icon={faUser} /> Administradores</Link>
        <hr />
        <Link 
          to="/catalogos"
          className={`${urlActual === '/catalogos' ? 'text-blue-300' : 'text-black'} text-xl block mt-2 hover:text-blue-300 mb-2`}
        > <FontAwesomeIcon icon={faBook} /> Catálogos</Link>
        <hr />
        <Link 
          to="/lideres"
          className={`${urlActual === '/lideres' ? 'text-blue-300' : 'text-black'} text-xl block mt-2 hover:text-blue-300 mb-2`}
        ><FontAwesomeIcon icon={faUsers} /> Lideres</Link>
        <hr />
        <Link 
          to="/usuarios"
          className={`${urlActual === '/usuarios' ? 'text-blue-300' : 'text-black'} text-xl block mt-2 hover:text-blue-300 mb-2`}
        ><FontAwesomeIcon icon={faUser} /> Usuarios</Link>
        <hr />
        <Link 
          to="/miempresa"
          className={`${urlActual === '/miempresa' ? 'text-blue-300' : 'text-black'} text-xl block mt-2 hover:text-blue-300 mb-2`}
        ><FontAwesomeIcon icon={faUsers} /> Mi empresa</Link>
        <hr />
        <Link 
          to="/cursos"
          className={`${urlActual === '/cursos' ? 'text-blue-300' : 'text-black'} text-xl block mt-2 hover:text-blue-300 mb-2`}
        ><FontAwesomeIcon icon={faAppleWhole} /> Cursos</Link>
        <hr />
        <Link 
          to="/recompensas"
          className={`${urlActual === '/recompensas' ? 'text-blue-300' : 'text-black'} text-xl block mt-2 hover:text-blue-300 mb-2`}
        ><FontAwesomeIcon icon={faUser} /> Recompensas</Link>
        <hr />
        <Link 
          to="/eventos"
          className={`${urlActual === '/eventos' ? 'text-blue-300' : 'text-black'} text-xl block mt-2 hover:text-blue-300 mb-2`}
        ><FontAwesomeIcon icon={faCalendar} /> Eventos</Link>
        <hr />
        <Link 
          to="/notificaciones"
          className={`${urlActual === '/notificaciones' ? 'text-blue-300' : 'text-black'} text-xl block mt-2 hover:text-blue-300 mb-2`}
        ><FontAwesomeIcon icon={faTriangleExclamation} />Notificaciones</Link>
        <hr />
        <Link 
          to="/reportes"
          className={`${urlActual === '/reportes' ? 'text-blue-300' : 'text-black'} text-xl block mt-2 hover:text-blue-300`}
        ><FontAwesomeIcon icon={faChartLine} />Reportes</Link>
      </nav>
    </div>
  )
}
