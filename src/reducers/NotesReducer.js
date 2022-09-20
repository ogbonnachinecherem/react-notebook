let initialStore = {
  notes: [],
};

let NotesReducer = (state = initialStore, action) => {
  console.log(state.notes);
  switch (action.type) {
    case "ADD_NEW_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    case "DELETE_NOTE":
      const tempNote = state.notes.filter((item) => item.id !== action.payload);
      return { ...state, notes: tempNote };
    case "EDIT_NOTE":
      const temp = state.notes.map((item) => {
        if (item.id === action.payload.data.id) {
          return action.payload.data;
        } else {
          return item;
        }
      });
      return { ...state, notes: temp };
    default:
      return state;
  }
};

export default NotesReducer;
