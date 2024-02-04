import Container from "react-bootstrap/Container";
import Keyboard from "./keyboards/Keyboard";
import { FormControl } from "react-bootstrap";
import { useState } from "react";
import {
  CLEAR_INSERTION,
  DELETE_LAST_INSERTION,
  OPERATION_INSERTION,
} from "./constraints";
import { add } from "mathjs";

// import Vector from "../objects/Vector";

const Calculator = ({ }) => {
  const [expression, setExpression] = useState("");
  const [currentOperation, setCurrentOperation] = useState(undefined);


  const inputInsertionHandler = (value, insertionType) => {
    console.log(insertionType);
    switch (insertionType) {
      case CLEAR_INSERTION:
        setExpression("");
        break;
      case DELETE_LAST_INSERTION:
        setExpression(expression.slice(0, expression.length - 1));
        break;
      case OPERATION_INSERTION:
        if (value === "=") {
          console.log(currentOperation(Number(expression)));
          break;
        }
        setCurrentOperation(() => (x) => {
          console.log(`calculating ${expression}+${x}`);
          return add(Number(expression), x);
        });
        setExpression("");
        break;
      default:
        setExpression(`${expression}${value}`);
    }
  };

  return (
    <Container className="d-flex flex-column justify-content-center">
      <FormControl className="mb-3" value={expression} disabled />
      <Keyboard clickHandler={inputInsertionHandler} />
    </Container>
  );
};

export default Calculator;
