import { Link, useParams } from "react-router-dom";

//Hooks
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  //4 - Rota dinâmica
  const { id } = useParams();
  //5 - carregamento individual
  const url = "http://localhost:3000/products/" + id;

  const { data: product, loading, error } = useFetch(url);

  console.log(product);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <h1>Carregando Dados...</h1>}
      {product && (
        <>
          <h1>{product.name}</h1>
          <p>R${product.price}</p>
          <Link to={`/products/${id}/info`}>Mais informações</Link>
        </>
      )}
    </>
  );
};

export default Product;
