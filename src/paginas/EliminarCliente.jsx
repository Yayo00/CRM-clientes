import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {useEffect} from 'react'


function EliminarCliente() {
  
  const params = useParams()
  const navigate = useNavigate()


  useEffect(()=>{
    
    const eliminarCliente = async()=>{
        const request = await fetch(`http://localhost:4000/clientes/${params.id}`,{
          method:"DELETE"
        })

        await request.json()
    }

    eliminarCliente()
    navigate('/clientes')

  })


}

export default EliminarCliente