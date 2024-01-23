import Row from "react-bootstrap/Row";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import {
  VectorStorageContext,
  vectorStorageActions,
} from "../context/VectorStorageContext";

const VectorCard = ({ name, vector }) => {
  const { dispatch } = useContext(VectorStorageContext);

  return (
    <Row className="mb-3 py-3 px-1 w-100 border border-secondary d-flex justify-content-between">
      <span className="text-center w-100 mb-2">
        {name + " = "}
        {vector.toString()}
      </span>
      <ButtonGroup>
        <Button variant="success">e</Button>
        <Button
          variant="danger"
          onClick={() =>
            dispatch({ type: vectorStorageActions.DELETE_VECTOR, payload: name })
          }
        >
          d
        </Button>
      </ButtonGroup>
    </Row>
  );
};

export default VectorCard;
