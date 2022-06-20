import React from 'react'
import styled from 'styled-components'

function Spinner() {

    const Spinner  = styled.div`
        width: 100px;
        height: 100px;
        border: 11.2px #474bff double;
        border-left-style: solid;
        border-radius: 50%;
        margin: 200px auto;
        animation: spinner-aib1d7 0.75s infinite linear;

        @keyframes spinner-aib1d7 {
        to {
            transform: rotate(360deg);
        }}`

  return (
    <Spinner/>
  )
}

export default Spinner