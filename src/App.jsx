import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Calculator from "./components/Calculator";

function App() {
  return (
    <Container fluid className="main-container">
      <Row>
        <Col className="layout-block" xs={2}>
          1
        </Col>
        <Col xs={4} className="d-flex">
          <Calculator />
        </Col>
        <Col className="layout-block">3</Col>
      </Row>
    </Container>
  );
}

export default App;
