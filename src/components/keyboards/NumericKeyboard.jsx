import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const NumericKeyboard = ({ }) => {
  return (
    <ButtonGroup className="w-75" vertical>
      <ButtonGroup>
        {[7, 8, 9].map((v) => (
          <Button key={v} variant="secondary">
            {v}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup>
        {[4, 5, 6].map((v) => (
          <Button key={v} variant="secondary">
            {v}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup>
        {[1, 2, 3].map((v) => (
          <Button key={v} variant="secondary">
            {v}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup>
        {[0, ",", "="].map((v) => (
          <Button key={v} variant="secondary">
            {v}
          </Button>
        ))}
      </ButtonGroup>
    </ButtonGroup>
  );
};

export default NumericKeyboard;
