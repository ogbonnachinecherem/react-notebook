import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { AddNewNote } from "../actions/NotesAction";

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

export default AddNote;
