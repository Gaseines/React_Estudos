import { useState, useCallback } from "react";

import List from "./List";

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0);

  const getItensFromDatabase = useCallback(() => {
    return ["a", "b", "c"];
  }, []);

  return (
    <div>
      <List getItens={getItensFromDatabase} />
      <h2>useCallback</h2>
      <button onClick={() => setCounter(counter + 1)}>Alterar!</button>
      <p>{counter}</p>
      <hr />
    </div>
  );
};

export default HookUseCallback;
