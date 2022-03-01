import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Layout } from './layout/Layout'
import { Inicio } from './pages/Inicio'
import { NuevoCliente } from './pages/NuevoCliente'
import { EditarCliente } from './pages/EditarCliente'
import { Administradores } from './pages/Administradores'
import { Catalogos } from './pages/Catalogos'
import { Lideres } from './pages/Lideres'
import { Usuarios } from './pages/Usuarios'
import { Miempresa } from './pages/Miempresa'
import { Cursos } from './pages/Cursos'
import { Recompensas } from './pages/Recompensas'
import { Eventos } from './pages/Eventos'
import { Notificaciones } from './pages/Notificaciones'
import { Reportes } from './pages/Reportes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Layout/>}>
          <Route index element={<Inicio/>} />
          <Route path="nuevo" element={<NuevoCliente/>} />
          <Route path="editar/:id" element={<EditarCliente/>} />
        </Route>
        <Route path="/administradores" element={<Layout/>}>
          <Route index element={<Administradores/>} />
        </Route>
        <Route path="/catalogos" element={<Layout/>}>
          <Route index element={<Catalogos/>} />
        </Route>
        <Route path="/lideres" element={<Layout/>}>
          <Route index element={<Lideres />} />
        </Route>
        <Route path="/usuarios" element={<Layout/>}>
          <Route index element={<Usuarios/>} />
        </Route>
        <Route path="/miempresa" element={<Layout/>}>
          <Route index element={<Miempresa/>} />
        </Route>
        <Route path="/cursos" element={<Layout/>}>
          <Route index element={<Cursos/>} />
        </Route>
        <Route path="/recompensas" element={<Layout/>}>
          <Route index element={<Recompensas />} />
        </Route>
        <Route path="/eventos" element={<Layout/>}>
          <Route index element={<Eventos />} />
        </Route>
        <Route path="/notificaciones" element={<Layout/>}>
          <Route index element={<Notificaciones />} />
        </Route>
        <Route path="/reportes" element={<Layout/>}>
          <Route index element={<Reportes/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

