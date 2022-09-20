import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import NotesReducer from "../reducers/NotesReducer";

let store = createStore(NotesReducer, applyMiddleware(thunk));

export default store;
