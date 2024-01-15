import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import NumericKeyboard from "./NumericKeyboard";
import OperationalKeyboard from "./OperationalKeyboard";

const Keyboard = ({ }) => {
  return (
    <ButtonGroup className="w-100">
      <OperationalKeyboard />
      <NumericKeyboard />
    </ButtonGroup>
  );
};

export default Keyboard;
