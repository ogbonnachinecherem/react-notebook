import React from "react";
import NoteItem from "./NoteItem";
import { Row } from "react-bootstrap";

function NotesContainer() {
  return (
    
      <Row style={{ marginTop: "30px" }}>
      <NoteItem />
      </Row>
   
   
  );
}

export default NotesContainer;
