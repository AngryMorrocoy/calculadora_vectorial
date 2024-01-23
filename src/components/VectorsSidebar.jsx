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

const VectorsSideBar = ({ }) => {
  const { state: vectors, dispatch } = useContext(VectorStorageContext);

  return (
    <Container className="p-0">
      <Row>
        <h3 className="text-center p-0">Vectores</h3>
      </Row>

      <Container className="d-flex flex-column align-items-center p-4">
        {Object.entries(vectors).map(([vectorName, vectorInstance], idx) => {
          return (
            <VectorCard key={idx} name={vectorName} vector={vectorInstance} />
          );
        })}
      </Container>

      <Row>
        <ButtonGroup>
          <Button
            className="rounded-0"
            variant="success"
            onClick={() => {
              const v_name = prompt("Enter vector name");
              const new_v = new Vector(
                Number(prompt("Enter x coord")),
                Number(prompt("Enter y coord")),
                Number(prompt("Enter z coord"))
              );

              dispatch({
                type: vectorStorageActions.CREATE_VECTOR,
                payload: { name: v_name, vector: new_v },
              });
            }}
          >
            +
          </Button>
        </ButtonGroup>
      </Row>
    </Container>
  );
};

export default VectorsSideBar;
