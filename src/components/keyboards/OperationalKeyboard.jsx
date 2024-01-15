import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const OperationalKeyboard = ({ }) => {
  return (
    <ButtonGroup vertical className="me-2 w-25">
      <ButtonGroup>
        <Button variant="secondary">.</Button>
        <Button variant="secondary">.</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>.</Button>
        <Button>.</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>.</Button>
        <Button>.</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>.</Button>
        <Button>.</Button>
      </ButtonGroup>
    </ButtonGroup>
  );
};

export default OperationalKeyboard;
