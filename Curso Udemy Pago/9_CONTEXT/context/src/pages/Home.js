import React from "react";

// import { useContext } from 'react'
// import { CounterContext } from '../context/CounterContext'

// 4 - Refatorando Context com Hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - Context Complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const {counter} = useContext(CounterContext)
  const { counter } = useCounterContext();

  // 5 - Context Complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 -Alterando Context complexo
  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador é: {counter}</p>

      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Vermelho</button>
      </div>
    </div>
  );
};

export default Home;
