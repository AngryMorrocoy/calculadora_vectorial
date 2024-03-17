import { useState } from "react";

export default function useFunction(initalFunction) {
  const [currentFunction, setCurrentFunction] = useState(initalFunction);

  const setFunction = (nf) => {
    setCurrentFunction(() => nf)
  }

  return [currentFunction, setFunction]
}
