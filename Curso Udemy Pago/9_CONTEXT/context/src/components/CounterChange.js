import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";


const CounterChange = () => {
  const {counter, setCounter} = useContext(CounterContext);



  return (
    <div>
      <button onClick={() => setCounter(counter + 2)}>Change value to Counter</button>
    </div>
  );
};

export default CounterChange;
