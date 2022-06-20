import React from 'react'
import Formulario from '../layouts/Formulario'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'

const EditarCliente = () => {

  const params = useParams()

  const [cliente,setCliente] = useState({})
  const [cargando, setCargando] = useState(true)


  useEffect(()=>{
    const obtenerCliente= async ()=>{
      try {
        
        const request = await fetch(`http://localhost:4000/clientes/${params.id}`)
        const response = await request.json()
        setCliente(response)
        console.log(cliente)
        setCargando(false)

      } catch (error) {
        console.log(error)
      } 
    }
    obtenerCliente()
  },[])


  return (
    <div>
        {cargando?(
          <Spinner/>
        ):(
          <>
            {Object.keys(cliente).length < 1 ? <div className='bg-red-600 text-lg p-5 text-center text-zinc-50 w-3/4 m-auto'>Cliente inexistente</div>:
            (
              <>
                <h1 className='font-black text-blue-900 text-4xl'>Ver Cliente:</h1>
                <p className='mt-5 font-medium'>Datos del cliente</p>
                <Formulario cliente={cliente} />        
              </>
            )}                  
          </>
        )}
      </div>

  )
}
export default EditarCliente