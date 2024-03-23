import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Calculator from "./components/Calculator";
import VectorsSideBar from "./components/VectorsSidebar";
import {
  VectorStorageContext,
  vectorStorageReducer,
} from "./context/VectorStorageContext";
import { useReducer } from "react";
import VectorsGraph from "./components/VectorsGraph/VectorsGraph";
import Vector from "./objects/Vector";

function App() {
  const [savedVectors, savedVectorsDispatch] = useReducer(
    vectorStorageReducer,
    { a: new Vector(2, 3, 4) }
  );

  return (
    <VectorStorageContext.Provider
      value={{ state: savedVectors, dispatch: savedVectorsDispatch }}
    >
      <Container fluid className="main-container">
        <Row>
          <Col className="layout-block" xs={2}>
            <VectorsSideBar />
          </Col>
          <Col xs={4} className="d-flex">
            <Calculator />
          </Col>
          <Col className="layout-block">
            <VectorsGraph />
          </Col>
        </Row>
      </Container>
    </VectorStorageContext.Provider>
  );
}

export default App;
