import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useContext } from "react";
import {
  VectorStorageContext,
  vectorStorageActions,
} from "../context/VectorStorageContext";
import Vector from "../objects/Vector";
import VectorCard from "./VectorCard";
import VectorManagerForm from "./VectorManagerForm";
import { useState } from "react";

const VectorsSideBar = ({ }) => {
  const { state: vectors, dispatch } = useContext(VectorStorageContext);
  const [modalVisibility, setModalVisibility] = useState(false)

  return (
    <Container className="m-0 p-0 ps-2">
      <Row>
        <h3 className="text-center p-0">Vectores</h3>
      </Row>

      <Container className="d-flex flex-column align-items-center p-0">
        {Object.entries(vectors).map(([vectorName, vectorInstance], idx) => {
          return (
            <VectorCard key={idx} name={vectorName} vector={vectorInstance} />
          );
        })}
      </Container>

      <Row>
        <ButtonGroup>
          <Button
            className="rounded-3"
            variant="success"
            onClick={() => {
              setModalVisibility(true)
            }}
          >
            +
          </Button>
        </ButtonGroup>
      </Row>
      <VectorManagerForm mode="CREATE" isVisible={modalVisibility} onHide={() => setModalVisibility(false)}/>
    </Container>
  );
};

export default VectorsSideBar;
