export const AddNewNote = (newNote) => {
  return {
    type: "ADD_NEW_NOTE",
    payload: newNote,
  };
};

export const DeleteNote = (id) => {
  return {
    type: "DELETE_NOTE",
    payload: id,
  };
};
export const EditNote = (data) => {
  return {
    type: "EDIT_NOTE",
    payload: { data },
  };
};
