import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { OPERATION_INSERTION } from "../constraints";
import { useContext } from "react";
import { VectorStorageContext } from "../../context/VectorStorageContext";
import { VECTORIAL_INSERTION } from "../constraints";

const OperationalKeyboard = ({ }) => {
  const { state: vectors } = useContext(VectorStorageContext);

  return (
    <ButtonGroup vertical className="w-25">
      <ButtonGroup>
        <DropdownButton title="Vectores">
          {Object.entries(vectors).map(([vectorName, _], idx) => {
            return (
              <Dropdown.Item
                key={idx}
                as="button"
                type="button"
                insertiontype={VECTORIAL_INSERTION}
              >
                {vectorName}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary w-50" disabled>sen</Button>
        <Button variant="secondary w-50" disabled>cos</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary w-50" disabled>√</Button>
        <Button variant="secondary w-50" disabled>a²</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary w-50" insertiontype={OPERATION_INSERTION}>•</Button>
        <Button variant="secondary w-50" insertiontype={OPERATION_INSERTION}>X</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary w-50" insertiontype={OPERATION_INSERTION}>
          +
        </Button>
        <Button variant="secondary w-50 rounded-0" insertiontype={OPERATION_INSERTION}>
          -
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
};

export default OperationalKeyboard;
