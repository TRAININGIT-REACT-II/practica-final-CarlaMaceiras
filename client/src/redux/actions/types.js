const actions = [
    //notas
    "ADD_NOTE",
    "COMPLETE_NOTE",
    //users
    "UPDATE_NAME"
];

const actionTypes = {};
actions.forEach((action) => {
    actionTypes[action] = action;
});

export default actionTypes;


/* ahora para utilizar estos reducers hay que poner en la parte del código dónde quiero utilizarlo un dispatch:

dispatch(addTodo("Hacer la compra")); 

Pero tendría antes que importar todo:

import store from "./store" 

import * as todosActions from "./actions/todos";
import * as userActions from "./actions/user";

store.dispatch(todosActions.addTodo("Ir a la compra"));
store.dispatch(userActions.updateName("Angel"));

console.log("REDUX", store.getState());

*/