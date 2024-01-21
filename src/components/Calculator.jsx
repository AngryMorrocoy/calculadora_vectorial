import Container from "react-bootstrap/Container";
import Keyboard from "./keyboards/Keyboard";
import { FormControl } from "react-bootstrap";
import { useState } from "react";
import { CLEAR_INSERTION, DELETE_LAST_INSERTION } from "./constraints";

const Calculator = ({ }) => {
  const [expression, setExpression] = useState("");

  const inputInsertionHandler = (value, insertionType) => {
    console.log(insertionType);
    switch (insertionType) {
      case CLEAR_INSERTION:
        setExpression("");
        break;
      case DELETE_LAST_INSERTION:
        setExpression(expression.slice(0, expression.length - 1));
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
