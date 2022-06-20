import React from 'react'
import {useParams} from 'react-router-dom' 
import {useEffect, useState} from 'react'
import Spinner from '../components/Spinner'


function VerCliente() {

  //Obtener id por url
  const params = useParams()

  const [cliente, setCliente]  = useState({})

  const [cargando,setCargando] = useState(false)

  const [error,setError] = useState(false)

  useEffect(()=>{

    const obtenerCliente = async()=>{
      setCargando(true)
      try {
        
        const request = await fetch(`http://localhost:4000/clientes/${params.id}`)
        const response = await request.json()
        
        setCliente(response)

      } catch (error) {
          setError(true)
      }
      setCargando(false)
    }
   obtenerCliente()

  },[])

  return (
    <>
    {
      error&&<div>{"Error en el servidor..."}</div>
    }
        {!cargando?(
            <>
            {Object.keys(cliente).length === 0 ?
                <p>No hay resultados</p>
            :
              <>
                <h1 className='font-black text-blue-900 text-4xl'>Ver Cliente:</h1>
                <p className='mt-5 font-medium'>Datos del cliente</p>
                <p className='mt-5'>Nombre: {cliente.nombre}</p>
                <p className='mt-5'>Empresa: {cliente.empresa}</p>
                <p className='mt-5'>Email: {cliente.email}</p>
                
                {cliente.telefono&&(
                  <p className='mt-5'>Telefono: {cliente.telefono}</p>
                )}

                {cliente.notas&&(
                  <p className='mt-5'>Notas: {cliente.notas}</p>
                )}
              </>
            }
                        
            </>
        ):
        <>
          <Spinner/>
        </>
        }    

    </>

  )
}

export default VerCliente