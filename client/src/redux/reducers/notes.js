import actionTypes from "../actions/types";

const initialState = {
    notes: []
}; 

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NOTE:
            return {
                notes: [
                    ...state.notes,
                    {
                        notes: action.notes,
                        complete: false
                    }
                ]
            }
        case actionTypes.COMPLETE_NOTE:
            return {
                notes: [
                    ...state.notes.slice(0, action.index),
                    {
                        ...state.notes[action.index],
                        completed: true,
                    },
                    ...state.notes.slice(action.index +1)
                ]
            }
        default:
            return state;
    }
};

export default reducer;