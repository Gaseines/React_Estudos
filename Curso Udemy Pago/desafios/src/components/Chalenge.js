import React, { useState } from 'react'

const Chalenge = () => {

    const [soma, setSoma ] = useState(0)

    const n1 = 50
    const n2 = 5

    const handleSoma = () =>{
        setSoma(n1 + n2)
    }

  return (

    <div>
      <p>Clique no botão abaixo para somar {n1} + {n2}</p>
      <button onClick={handleSoma}>Somar</button>
      <p>{soma}</p>
    </div>
  )
}

export default Chalenge
