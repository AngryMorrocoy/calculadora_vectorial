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
import {
  vectorOperationsFactoriesBuilder,
  vectorTypeFactory,
} from "../objects/mathExtensions";
import useFunction from "../customHooks/useFunction";

const math = create(all);
math.import([vectorTypeFactory, ...vectorOperationsFactoriesBuilder()]);

const functionsDict = {
  "+": math.add,
  "-": math.subtract,
  "•": math.dotProduct,
  "X": math.crossProduct,
};

const Calculator = ({ }) => {
  const [currentOperand, setCurrentOperand] = useState(undefined);
  const [currentOperation, setCurrentOperation] = useFunction(undefined);
  const [visualExpression, setVisualExpression] = useState("");

  const { state: vectors } = useContext(VectorStorageContext);

  const inputInsertionHandler = (value, insertionType) => {
    let newExpression;
    switch (insertionType) {
      case VECTORIAL_INSERTION:
        setCurrentOperand(vectors[value]);
        setVisualExpression(vectors[value].toString());
        break;
      case NUMERIC_INSERTION:
        if (!/^\d*(\.\d*)?$/.test(visualExpression)) break;

        newExpression = `${visualExpression}${value}`;
        setVisualExpression(newExpression);
        setCurrentOperand(Number(newExpression));
        break;
      case CLEAR_INSERTION:
        setCurrentOperand(undefined);
        setVisualExpression("");
        break;
      case DELETE_LAST_INSERTION:
        newExpression = visualExpression.replace(/(.|(\(.*\)))$/, "");
        setVisualExpression(visualExpression.replace(/(.|(\(.*\)))$/, ""));
        setCurrentOperand(Number(newExpression));
        break;
      case OPERATION_INSERTION:
        if (value === "=") {
          const result = currentOperation(currentOperand);
          inputInsertionHandler(undefined, CLEAR_INSERTION);
          setVisualExpression(`${result}`);
          setCurrentOperand(result);
          break;
        }

        setCurrentOperation((b) => functionsDict[value](currentOperand, b));
        const isVectorOnlyOperation = ["dotProduct", "crossProduct"].includes(
          functionsDict[value].name
        );

        if (isVectorOnlyOperation && !currentOperand.isVector) {
          setCurrentOperation((b) => math.multiply(currentOperand, b));
        }
        inputInsertionHandler(undefined, CLEAR_INSERTION);
        break;
    }
  };

  return (
    <Container className="d-flex flex-column justify-content-center">
      <FormControl className="mb-3" value={visualExpression} disabled />
      <Keyboard clickHandler={inputInsertionHandler} />
    </Container>
  );
};

export default Calculator;
