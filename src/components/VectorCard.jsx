import Row from "react-bootstrap/Row";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import {
  VectorStorageContext,
  vectorStorageActions,
} from "../context/VectorStorageContext";
import YesNoModal from "./YesNoModal";

const VectorCard = ({ name, vector }) => {
  const { dispatch } = useContext(VectorStorageContext);
  const [displayModal, setDisplayModal] = useState(false);

  const dispatchDeleteVector = () => {
    dispatch({
      type: vectorStorageActions.DELETE_VECTOR,
      payload: name,
    });
  };

  return (
    <Row className="mb-3 py-3 px-1 w-100 border border-secondary d-flex justify-content-between">
      <span className="text-center w-100 mb-2">
        {name + " = "}
        {vector.toString()}
      </span>
      <ButtonGroup>
        <Button variant="success">e</Button>
        <Button variant="danger" onClick={() => setDisplayModal(true)}>
          d
        </Button>
      </ButtonGroup>
      {displayModal && (
        <YesNoModal
          show={true}
          onHide={() => setDisplayModal(false)}
          title={`¿Seguro que deseas eliminar el vector "${name}"?`}
          onYes={dispatchDeleteVector}
          onNo={() => setDisplayModal(false)}
        />
      )}
    </Row>
  );
};

export default VectorCard;
