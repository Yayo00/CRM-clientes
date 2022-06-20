import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import Error from '../components/Error'
import {useNavigate} from 'react-router-dom'

function Formulario({cliente}) {

  const navigate = useNavigate()  

  const nuevoClienteSchema=Yup.object().shape({
        
    //Generar el schema de validación cada valor

        nombre: Yup.string()
                .min(3,"El nombre es muy corto")
                .max(20,"El nombre es muy largo")
                .required("El nombre del cliente es necesario"),

        empresa: Yup.string()
            .required("El nombre de la empresa es obligatorio"),

        email:Yup.string()
            .email("No contiene la escritura de un email")
            .required("El email es obligatorio"),

        telefono:Yup.number()
            .integer("Número no válido")
            .positive('Número no válido')
            .typeError("El número no es válido"),

  })  

  const enviandoValores = async (values)=>{

    let request = null
    try {
    //Si ya existe el cliente
        if(cliente.id){
            
            request = await fetch(`http://localhost:4000/clientes/${cliente.id}`,{
                method:"PUT",
                body: JSON.stringify(values),
                headers:{
                    "Content-Type": "application/json"
                }           
            })

            await request.json()
            
        
        } 
        else{ //Nuevo cliente
            request = await fetch("http://localhost:4000/clientes",{
                method:"POST",
                body: JSON.stringify(values),
                headers:{
                    "Content-Type": "application/json"
                }           
            })
    
            await request.json()
        }
            
    }
    catch (error) {
        console.log(error)
    }

  }

  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>{cliente.nombre?"Editar cliente":"Agregar cliente"}</h1>
        <Formik
            initialValues={{
                //valores asociados con el name de cada Field
                nombre:cliente?.nombre ??'', //Otra forma de evaluar más moderna
                empresa:cliente?.empresa??'',
                email:cliente?.email??'',
                telefono:cliente?.telefono??'',
                notas:cliente?.notas??'',
            }}
            enableReinitialize={true} //Permite pasar valores definidos a cada Field
            onSubmit ={async (values,{resetForm})=>{
                //Valores de Fields
                await enviandoValores(values) 
                
                resetForm() //esta función espera a que la otra termine para ejecutarse

                navigate('/clientes') //usando el hook de redireccionamiento

            }}
            validationSchema = {nuevoClienteSchema} //Generar el schema de validación
        >
            {({touched,errors})=>{
                //touched: si el usuario sale del input, será true
                //errors: errores de valicación del schema
                return(
                    <Form className='mt-10'>
                    <div className='mb-4'>
                        <label className='text-gray-800' htmlFor='nombre'>Nombre:</label>
                        <Field id="nombre" name="nombre" type="text" className='mt-2 block w-full p-3 bg-gray-50' placeholder='Nombre del cliente'/>
                    </div>

                    {touched.nombre && errors.nombre?
                        //Si presiona el field nombre y sale y si hay errores en el nombre
                        <Error mensaje={errors.nombre}/>            
                    :null}

                    <div className='mb-4'>
                        <label className='text-gray-800' htmlFor='empresa'>Empresa:</label>
                        <Field id="empresa" name="empresa" type="text" className='mt-2 block w-full p-3 bg-gray-50' placeholder='Nombre del cliente'/>
                    </div>

                    {touched.empresa && errors.empresa?
                        <Error mensaje={errors.empresa}/>
                    :null}

                    <div className='mb-4'>
                        <label className='text-gray-800' htmlFor='email'>Email:</label>
                        <Field id="email" name="email" type="email" className='mt-2 block w-full p-3 bg-gray-50' placeholder='Nombre del cliente'/>
                    </div>

                    {touched.email && errors.email?
                        <Error mensaje={errors.email}/>
                    :null}
                    
                    <div className='mb-4'>
                        <label className='text-gray-800' htmlFor='telefono'>Teléfono:</label>
                        <Field id="telefono" name="telefono" type="telefono" className='mt-2 block w-full p-3 bg-gray-50' placeholder='Nombre del cliente'/>
                    </div>
                    
                    {touched.telefono &&errors.telefono?
                        <Error mensaje={errors.telefono}/>
                    :null}

                    <div className='mb-4'>
                        <label className='text-gray-800' htmlFor='notas'>Notas:</label>
                        <Field as="textarea" name="notas"  id="notas" type="notas" className='mt-2 h-40 block w-full p-3 bg-gray-50' placeholder='Nombre del cliente'/>
                    </div>
                    <input type="submit" value={cliente.nombre?"Editar cliente":"Agregar cliente"} className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'/>
                </Form>
                )
            }}

        </Formik>
    </div>
  )
}

//Generar un valor por defecto para evitar errores en Agregar cliente
Formulario.defaultProps={
    cliente:{}
}
export default Formulario