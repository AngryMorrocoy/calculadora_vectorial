import ButtonGroup from "react-bootstrap/ButtonGroup";
import NumericKeyboard from "./NumericKeyboard";
import OperationalKeyboard from "./OperationalKeyboard";

const Keyboard = ({ clickHandler }) => {
  const buttonClickHandler = (evt) => {
    if (evt.target?.type !== "button") return;
    const target = evt.target
    const insertionValue = target.textContent
    const insertionType = target.attributes.insertiontype.value
    clickHandler(insertionValue, insertionType)
  };

  return (
    <ButtonGroup onClick={buttonClickHandler} className="w-100">
      <OperationalKeyboard />
      <NumericKeyboard />
    </ButtonGroup>
  );
};

export default Keyboard;
