import Container from "react-bootstrap/Container";
import Keyboard from "./keyboards/Keyboard";
import { FormControl } from "react-bootstrap";
import { useState } from "react";
import {
  CLEAR_INSERTION,
  DELETE_LAST_INSERTION,
  NUMERIC_INSERTION,
  OPERATION_INSERTION,
  VECTORIAL_INSERTION,
} from "./constraints";
import { useContext } from "react";
import { VectorStorageContext } from "../context/VectorStorageContext";
import { create, all } from "mathjs";
import { vectorOperationsFactoriesBuilder, vectorTypeFactory } from "../objects/mathExtensions";
import Vector from "../objects/Vector";

const math = create(all)
math.import([vectorTypeFactory, ...vectorOperationsFactoriesBuilder()])

const Calculator = ({ }) => {
  const [operand, setOperand] = useState(undefined);
  const [expression, setExpression] = useState("");

  const { state: vectors } = useContext(VectorStorageContext);

  const inputInsertionHandler = (value, insertionType) => {
    let newExpression;
    // console.log(insertionType);
    switch (insertionType) {
      case VECTORIAL_INSERTION:
        setOperand(vectors[value]);
        setExpression(vectors[value].toString());
        break;
      case NUMERIC_INSERTION:
        if (!/^\d*$/.test(expression)) break;

        newExpression = `${expression}${value}`;
        setExpression(newExpression);
        setOperand(Number(newExpression));
        break;
      case CLEAR_INSERTION:
        setOperand(undefined);
        setExpression("");
        break;
      case DELETE_LAST_INSERTION:
        newExpression = expression.replace(/(.|(\(.*\)))$/, "");
        setExpression(expression.replace(/(.|(\(.*\)))$/, ""));
        setOperand(undefined);
        break;
      case OPERATION_INSERTION:
        break;
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
