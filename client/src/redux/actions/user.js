import actionTypes from "./types";


export const updateName = (name, password) => ({
    type: actionTypes.UPDATE_NAME,
    name,
    password
});


