import { useState } from "react"

const Renderizacao = () => {

  const [x] = useState(true)

  const [valid, setValid] = useState(false)
  const [nome, setNome] = useState("")

  const [peoples] = useState([
    { id: 1841566, name: "Gabriel", age: 21 },
    { id: 2652652, name: "Luiza", age: 22 },
    { id: 6892132, name: "Mariana", age: 8 }
  ])

  const handleValid = async (e) => {
    const n = e.target.value
    let nomeValido = peoples.find(p => p.name === n)

    if (nomeValido) {
      setNome(nomeValido)

    } else {
      setNome("")
      setValid(false)
    }

  }

  const handleSearch = async () => {
    let nomeValido = peoples.find(p => p.name === nome.name)

    try {
      if (nomeValido) {
        setValid(true)

      } else {
        setValid(false)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      {/* Condição em JS */}
      {x && <p>X é true</p>}

      <input type="text" placeholder="Pesquise um nome" onChange={handleValid} />
      <button onClick={handleSearch} >search</button>

      {!valid && (
        <>
          <h1>Lista</h1>
          {peoples.map((p) => (
            <p key={p.id}>{p.name}</p>
          ))}

        </>
      )}
      {valid && (
        <>
          <p>Nome: {nome.name}</p>
          <p>Idade: {nome.age}</p>
        </>
      )}
    </div>

  )
}

export default Renderizacao
