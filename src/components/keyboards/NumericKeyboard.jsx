import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  NUMERIC_INSERTION,
  OPERATION_INSERTION,
  CLEAR_INSERTION,
  DELETE_LAST_INSERTION,
} from "../constraints";

const NumericKeyboard = ({ }) => {
  return (
    <ButtonGroup className="w-75" vertical>
      <ButtonGroup>
        <Button insertiontype={CLEAR_INSERTION}>C</Button>
        <Button insertiontype={DELETE_LAST_INSERTION}>{"<"}</Button>
      </ButtonGroup>
      <ButtonGroup>
        {[7, 8, 9].map((v) => (
          <Button key={v} variant="secondary" insertiontype={NUMERIC_INSERTION}>
            {v}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup>
        {[4, 5, 6].map((v) => (
          <Button key={v} variant="secondary" insertiontype={NUMERIC_INSERTION}>
            {v}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup>
        {[1, 2, 3].map((v) => (
          <Button key={v} variant="secondary" insertiontype={NUMERIC_INSERTION}>
            {v}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup>
        {[0, ".", "="].map((v) => (
          <Button
            key={v}
            variant="secondary"
            insertiontype={
              [0, "."].includes(v) ? NUMERIC_INSERTION : OPERATION_INSERTION
            }
          >
            {v}
          </Button>
        ))}
      </ButtonGroup>
    </ButtonGroup>
  );
};

export default NumericKeyboard;
