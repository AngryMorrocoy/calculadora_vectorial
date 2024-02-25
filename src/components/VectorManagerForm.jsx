import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import {
  VectorStorageContext,
  vectorStorageActions,
} from "../context/VectorStorageContext";
import { useContext } from "react";
import Vector from "../objects/Vector";

const VectorManagerForm = ({ mode, isVisible, onHide }) => {
  mode = mode ?? "CREATE";

  const { dispatch } = useContext(VectorStorageContext);
  const [components, setComponents] = useState({ x: 0, y: 0, z: 0 });
  const [vectorName, setVectorName] = useState("");

  const handleClose = () => {
    setComponents({ x: 0, y: 0, z: 0 });
    setVectorName("");
    onHide();
  };

  const onlyNumbersHandler = (evt, component) => {
    let value = evt.target.value;
    value = value === "" ? "0" : value;

    if (evt.nativeEvent.data === "-") {
      value = value.replace(/^-*/, "-");
      value = value.replace(/-*$/, "");
    }

    if (/^-?\d+(\.?\d*)$/.test(value)) {
      value = value.replace(/^(-)?0+(\d+)/, "$1$2");
      value = value.replace(/^-$/, "-0")
      setComponents({ ...components, [component]: value });
    }
  };

  return (
    <Modal show={isVisible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crear un vector</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              onChange={(evt) => setVectorName(evt.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Componentes</Form.Label>
            <Container className="p-0">
              <Row>
                {["x", "y", "z"].map((comp, idx) => {
                  return (
                    <Col key={idx}>
                      <Form.Control
                        type="text"
                        value={components[comp]}
                        onChange={(e) => onlyNumbersHandler(e, comp)}
                      />
                    </Col>
                  );
                })}
              </Row>
              <Row>
                <Col className="text-center">x</Col>
                <Col className="text-center">y</Col>
                <Col className="text-center">z</Col>
              </Row>
            </Container>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          onClick={() => {
            dispatch({
              type: vectorStorageActions.CREATE_VECTOR,
              payload: {
                name: vectorName,
                vector: new Vector(
                  Number(components.x),
                  Number(components.y),
                  Number(components.z)
                ),
              },
            });
            handleClose();
          }}
        >
          {mode === "CREATE" ? "Crear" : "Editar"}
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VectorManagerForm;
