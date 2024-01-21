import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const OperationalKeyboard = ({ }) => {
  return (
    <ButtonGroup vertical className="me-2 w-25">
      <ButtonGroup>
        <Button variant="secondary">sen</Button>
        <Button variant="secondary">cos</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">(</Button>
        <Button variant="secondary">)</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">•</Button>
        <Button variant="secondary">X</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">+</Button>
        <Button variant="secondary">-</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">sq</Button>
        <Button variant="secondary">a²</Button>
      </ButtonGroup>
    </ButtonGroup>
  );
};

export default OperationalKeyboard;
