import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { AddNewNote } from "../actions/NotesAction";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddNote() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddNewNote({ id: uuidv4(), title, date, note }));
    setTitle("");
    setDate("");
    setNote("");
  };
  return (
    <>
      {/* <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
        />
        <textarea
          name="note"
          id="note"
          cols="30"
          rows="5"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          required
        ></textarea>
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </form> */}
      <Form>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>TITLE: </Form.Label>
        <Form.Control type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>DATE:</Form.Label>
        <Form.Control type="date"
          name="date"
          id="date"
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}/>
      </Form.Group>
      <Form.Label>NOTE: </Form.Label>
      <Form.Control as="textarea" placeholder="Write your notes" style={{ height: '100px' }} name="note"
          id="note"
          cols="30"
          rows="5"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          required/>
      <Button id="savebtn" variant="success" type="submit"  onClick={handleSubmit}> Save </Button>
    </Form>
    </>
  );
}

export default AddNote;
