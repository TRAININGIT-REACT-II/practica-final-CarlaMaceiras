import actionTypes from "../actions/types";

const initialState = {
    name: "",
    password: ""
}; 

const reducer = (state= initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_NAME:
            const newState = {
                name: action.name,
                password: action.password
            };
            return newState;

        default: 
            return state;
    }

};

export default reducer;