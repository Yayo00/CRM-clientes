import React from 'react'
import {useNavigate} from 'react-router-dom'

//En vez de crear a para redireccionar, se usa el hook de useNavigate

function Cliente({cliente}) {
  
  const navigate = useNavigate()

  const{nombre,empresa,email,telefono,notas,id}=cliente

  return (
    <tr className='border-current hover:bg-gray-100 font-medium'>
      <td>{nombre}</td>
      <td>{empresa}</td>
      <td>{email}</td>
      <td>{telefono}</td>
      <td>{notas}</td>
      <td className='md-flex flex-row'>
        
        <button className='w-3/4 bg-yellow-500 mt-3' onClick={()=>{
          navigate(`/clientes/${id}`)
        }}>Ver</button>

        <button className='w-3/4 bg-sky-600 mt-3' onClick={()=>{
          navigate(`/clientes/editar/${id}`)
        }}>Editar</button>
        
        <button className='w-3/4 bg-red-600 mt-3' onClick={()=>{
          navigate(`/clientes/eliminar/${id}`)
        }}>Eliminar</button>
      </td>
    </tr>
  )
}

export default Cliente