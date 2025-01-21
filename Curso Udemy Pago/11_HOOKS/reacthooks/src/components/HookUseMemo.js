import { useState, useEffect, useMemo } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

  //const premiumNumbers = ["0", "100", "200"];

  const premiumNumbers = useMemo(() => {
    return ["0", "100", "200"];
  }, []);

  useEffect(() => {
    console.log("Premium Number foi alterado!");
  }, [premiumNumbers]);

  return (
    <div>
      <h2>useMemo</h2>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <p>
        {premiumNumbers.includes(number) ? " Acertou o número premiado!!" : ""}
      </p>
      <hr />
    </div>
  );
};

export default HookUseMemo;
