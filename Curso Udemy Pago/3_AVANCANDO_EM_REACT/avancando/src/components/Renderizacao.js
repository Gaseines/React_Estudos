import { useState } from "react"

const Renderizacao = () => {

    const [x] = useState(true)

  return (
    <div>
      {/* Condição em JS */}
      {x && <p>X é true</p>}
    </div>
  )
}

export default Renderizacao
