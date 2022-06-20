
import Layout from './layouts/Layout.jsx'
import Inicio from './paginas/Inicio.jsx'
import NuevoCliente from './paginas/NuevoCliente.jsx'
import EditarCliente from './paginas/EditarCliente.jsx'
import EliminarCliente from './paginas/EliminarCliente.jsx'
import VerCliente from './paginas/VerCliente.jsx'

//Rutas React
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
    return(
      //Buscador de rutas -> conjunto de rutas -> rutas -> subrutas
      <BrowserRouter>
        <Routes>
          <Route path="/clientes" element={<Layout />}>
              <Route index element={<Inicio />}/> 
              <Route path="nuevo" element= {<NuevoCliente />}/>
              <Route path ="editar/:id" element={<EditarCliente />}/>
              <Route path ="eliminar/:id" element={<EliminarCliente />}/>
              <Route path=":id" element={<VerCliente/>} />
          </Route>

        </Routes>
      </BrowserRouter>

    )
}

export default App
