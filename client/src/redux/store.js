import { createStore, combineReducers } from "redux"; 


import notes from "./reducers/notes";
import user from "./reducers/user";

export default createStore(combineReducers( { notes, user }));

