import React, { useEffect, useState } from 'react'

const HookUseEffect = () => {

    // 5 - Iniciando com useEffect
    const [number, setNumber] = useState(0)

    useEffect(() =>{
        console.log("Estou sendo executado")
    })

    const changeSomething = () =>{
        return setNumber(number + 1)
    }

    // 6 - array de deps. vazio
    useEffect(() =>{
        console.log("Vou ser Executado apenas uma vez")
    }, [])

    // 7 - Item no array de deps.
    const [anotherNumber, setAnotherNumber] = useState(0)
    useEffect(() =>{
        if(anotherNumber > 0){
            console.log("Estou sendo executado apenas quando o anotherNumber muda!")
        }
    }, [anotherNumber])

    const changeSomethingAnotherNumber = () =>{
        setAnotherNumber(anotherNumber + 10)
    }

    // 8 - Cleanup do useEffect
    useEffect(() => {
        // const timer = setTimeout(() => {
        //     console.log("2s se passaram")
        //     setAnotherNumber(anotherNumber + 1)
        // }, 2000)

        // return () => clearTimeout(timer)
        
    }, [anotherNumber])

  return (
    <div>
      <h2>useEffect</h2>

        <p>Number:{number}</p>
        <button onClick={changeSomething}>Mudar number</button>

        <p>Another Number: {anotherNumber}</p>
        <button onClick={changeSomethingAnotherNumber}>Mudar another number</button>
      <hr />
    </div>
  )
}

export default HookUseEffect
