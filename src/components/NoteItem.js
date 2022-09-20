import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteIcon, editIcon } from "../icons";
import { EditNote, DeleteNote } from "../actions/NotesAction";
import { Modal } from "react-bootstrap";
import EditNotesForm from "./EditNotesForm";

function NoteItem() {
  const dispatch = useDispatch();
  const { notes } = useSelector((store) => store);

  const [show, setShow] = useState(false);
  const [editNote, setEditNote] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setEditNote(data);
    setShow(true);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditNotesForm editNote={editNote} hide={handleClose} />
        </Modal.Body>
      </Modal>
      {notes?.map((item) => {
        const { id, title, date, note } = item;
        return (
          <article key={id}>
            <h3>Title:{title}</h3>
            <h6>Date:{date}</h6>
            <p>Note:{note}</p>
            <button className="edit-btn" onClick={() => handleShow(item)}>
              {editIcon}
            </button>
            <button
              className="delete-btn"
              onClick={() => dispatch(DeleteNote(id))}
            >
              {deleteIcon}
            </button>
          </article>
        );
      })}
    </>
  );
}

export default NoteItem;
