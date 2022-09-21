import "./App.css";
import AddNote from "./components/AddNote";
import NotesContainer from "./components/NotesContainer";
import { Container, Col, Row } from "react-bootstrap";
function App() {
  return (
    <>
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col md={12}>
          <h1 id="ed">EXCEL DEVELOPERS NOTEBOOK</h1>
        </Col>
      </Row>
      <Row>
      <Col md={4}><AddNote /></Col>
      <Col md={8}><NotesContainer /></Col>
      </Row>
    </Container>
      
      
    </>
  );
}

export default App;
