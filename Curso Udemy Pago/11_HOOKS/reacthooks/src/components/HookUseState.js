import React, { use } from "react";

//Hook
import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let nome = "João";

  const [useName, setUseName] = useState("Gabriel");

  const handleNome = () => {
    nome = "Joao borba";
    setUseName("Gabriel Nunes");

    console.log(nome);
    console.log(useName);
  };

  //   2 - useState input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(age)
  }

  return (
    <div>
      <h2>useState</h2>
      {/* 1 - useState */}
      <p>variável: {nome}</p>
      <p>useState: {useName}</p>
      <button onClick={handleNome}>Mudar nomes!</button>

      {/* 2 - useState input */}
      <p>Digite seu nome:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          name="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value={"Enviar"} />
      </form>
      <p>Você tem {age} anos!!</p>

      <hr />
    </div>
  );
};

export default HookUseState;
