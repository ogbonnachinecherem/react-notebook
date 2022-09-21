import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { EditNote } from "../actions/NotesAction";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EditNotesForm({ editNote, hide }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(editNote.title);
  const [date, setDate] = useState(editNote.date);
  const [note, setNote] = useState(editNote.note);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(EditNote({ id: editNote.id, title, date, note }));
    hide();
  };
  //   console.log(editNote);
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
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Title: </Form.Label>
					<Form.Control
						type="text"
            name="title"
            id="title"
            placeholder="Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Date: </Form.Label>
					<Form.Control
						type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Notes</Form.Label>
					<Form.Control as="textarea" placeholder="Write your notes" style={{ height: '100px' }} name="note"
          id="note"
          cols="30"
          rows="5"
          value={note}
          onChange={(e) => setNote(e.target.value)}/>
				</Form.Group>
				<Button id="savebtn" type="submit" onClick={handleSubmit}>Save</Button>
			</Form>
    </>
  );
}

export default EditNotesForm;
