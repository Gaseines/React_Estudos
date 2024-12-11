import { useEffect, useState } from "react";
import "./App.css";

//4- Custom Hooks
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  //Custom hook utilizado, nomeando o data para itens
  const {data: itens} = useFetch(url)

  const [name, setName] = useState("");
  const [price, setPrice] = useState();

  //1 - Resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  // 2 - Postando dados

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(product)
    })

    const produtoAdicionado = await res.json();

    setProducts((prevProducts) => [...prevProducts, produtoAdicionado])

    setName("")
    setPrice("")
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {itens && itens.map((product) => (
          <li key={product.id}>
            {product.name} - <b>R${product.price}</b>
          </li>
        ))}
      </ul>

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
