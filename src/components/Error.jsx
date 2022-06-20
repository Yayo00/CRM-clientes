import React from 'react'

function Error({mensaje}) {
  return (
    <div className='bg-red-200 p-2 mb-5'>{mensaje}</div>
  )
}

export default Error