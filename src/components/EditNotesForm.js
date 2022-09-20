import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { EditNote } from "../actions/NotesAction";

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
      <form>
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
      </form>
    </>
  );
}

export default EditNotesForm;
