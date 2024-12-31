import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/search?name=' + query)
        console.log(query)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setQuery(e.target.value)} />
            <input type="submit" value={"Buscar"} />
      </form>
    </div>
  )
}

export default SearchForm
