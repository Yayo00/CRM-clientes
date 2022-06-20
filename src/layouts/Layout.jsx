import React from 'react'
import {Outlet, Link, useLocation} from 'react-router-dom' 
 // Outlet Iniciará los elementos hijos dentro del route padre
 //Link es otra forma de redirigir urls sin necesidad de elementos a
// useLocation otro hook para identificar en qué ruta nos encontramos

const Layout = () => {

  const location = useLocation()
  const pathname = location.pathname


  return (
      <div className='md:flex md:min-h-screen'>
          <div className='md:w-1/4 bg-blue-900 px-5 py-10'>
              <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>
              <nav className='mt-10'>
                  <Link
                    className={`${pathname === '/clientes'?'text-blue-300': 'text-white'} 
                    text-2xl block mt-2 hover:text-blue-300`}
                    to='/clientes'>Clientes</Link>

                  <Link 
                    className={`${pathname =='/clientes/nuevo'?'text-blue-300':'text-white'} 
                    text-2xl block mt-2 hover:text-blue-300`} 
                    to='/clientes/nuevo'>Nuevo Cliente</Link>              
              </nav>
          </div>  

          <div className='md:w-3/4 py-10 px-10 md: h-screen overflow-scroll'>
            <Outlet/>
          </div>
      </div>
  )
}

export default Layout
