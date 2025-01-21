import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
  const ref = useRef;

  useDebugValue("--- CUSTOM HOOK E USEDEBUGVALUE ---")
  useDebugValue("O número anterior era: " + ref.current)

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
