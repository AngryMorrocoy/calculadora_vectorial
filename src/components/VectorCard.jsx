import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
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
    <Card className="w-100 mb-3">
      <Card.Body>
        <Card.Title className="text-center fw-bold">{name}</Card.Title>

        <Row className="pt-3">
          <Col className="text-center w-100 fw-bold">X</Col>
          <Col className="text-center w-100 fw-bold">Y</Col>
          <Col className="text-center w-100 fw-bold">Z</Col>
        </Row>
        <Row className="">
          <Col className="text-center w-100 border border-secondary">{vector.x}</Col>
          <Col className="text-center w-100 border border-secondary">{vector.y}</Col>
          <Col className="text-center w-100 border border-secondary">{vector.z}</Col>
        </Row>

        <Card.Text className="border-top border-2 border-secondary w-100 mt-4 pt-2">
          Norma: <span className="fw-bold">{vector.size}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
};

export default VectorCard;
