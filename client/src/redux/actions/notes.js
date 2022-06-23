import actionTypes from "./types"


export const addNotes= (notes) => ({
    type: actionTypes.ADD_NOTE,
    notes
});

export const completeNote= (index) => ({
    type:actionTypes.COMPLETE.NOTE,
    index
});