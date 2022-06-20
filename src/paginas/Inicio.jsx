import React from 'react'
import { useEffect,useState } from 'react'
import Cliente from '../components/Cliente'
import Spinner from '../components/Spinner'

const Inicio = () => {

  const [clientes,setClientes] = useState([])
  const [cargando,setCargando] = useState(false)

  useEffect(()=>{
    const verClientes = async()=>{
      setCargando(true)
        try {
          const request = await fetch('http://localhost:4000/clientes')
          const response = await request.json()
          setClientes(response)

          setCargando(false)
        } catch (error) {
          console.log(error)
        }
    }
    verClientes()
  },[])


  return (
      <>
      {!cargando?(
        <>
            <h1 className='font-black text-blue-900 text-4xl'>Ver a tus Clientes</h1>
            <table className='w-3/4 bg-sky-700 mt-10 mx-auto text-center'>
              <thead className='text-white font-bold box-border'>
                <tr className='text-center'>
                  <td>Nombre</td>
                  <td>Empresa</td>
                  <td>Correo</td>
                  <td>Teléfono</td>
                  <td>Notas</td>
                  <td>Acciones</td>
                </tr>
              </thead>
              <tbody className='bg-white'>
                
                  {clientes.length > 0?clientes.map(cliente=>(

                      <Cliente
                        key = {cliente.id}
                        cliente={cliente}/>

                    ))
                  : (
                    <td colSpan={5} className='p-10'>No hay clientes</td>
                  )}
              </tbody>
            </table>
        </>
      ):
        <>
          <Spinner/>
        </>}
      </>
  )
}

export default Inicio