import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { OPERATION_INSERTION } from "../constraints";

const OperationalKeyboard = ({ }) => {
  return (
    <ButtonGroup vertical className="me-2 w-25">
      <ButtonGroup>
        <Button variant="secondary">Vectores</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">sen</Button>
        <Button variant="secondary">cos</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">sq</Button>
        <Button variant="secondary">a²</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">•</Button>
        <Button variant="secondary">X</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary" insertiontype={OPERATION_INSERTION}>
          +
        </Button>
        <Button variant="secondary">-</Button>
      </ButtonGroup>
    </ButtonGroup>
  );
};

export default OperationalKeyboard;
