import actionTypes from "./types"


export const addNotes= (notes) => ({
    type: actionTypes.ADD_NOTE,
    complete: false,
    notes
});

export const completeNote= (index) => ({
    type:actionTypes.COMPLETE.NOTE,
    index
});