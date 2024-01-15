import Container from "react-bootstrap/Container";
import Keyboard from "./keyboards/Keyboard";

const Calculator = ({ }) => {
  return (
    <Container className="d-flex align-middle">
      <Keyboard />
    </Container>
  );
};

export default Calculator;
