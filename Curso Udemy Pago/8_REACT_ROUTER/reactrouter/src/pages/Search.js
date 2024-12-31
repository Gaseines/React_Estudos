import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();

  // Ajusta a URL para incluir o filtro "name"
  const query = searchParams.get('name')
  const url = `http://localhost:3000/products?name_like=${query}`; //Funciona só na versão 0.17.4

  const { data: itens, loading, error } = useFetch(url);

  console.log(url); // Debug para verificar a URL gerada

  return (
    <div>
      <h1>Resultados disponíveis</h1>
      {error && <p>{error}</p>}
      {loading && <p>Carregando dados...</p>}
      <ul>
        {itens &&
          itens.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R${item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
