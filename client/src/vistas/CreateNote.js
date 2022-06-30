import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


import { addNotes } from "../redux/actions/notes";
import store from "../redux/store";

// import * as noteActions from "../redux/actions/notes"

const CreateNote = () => {
  
    const [newNote, setNewNote] = useState("");

    // const dispatch = useDispatch();

    

    const onSubmit = (e) => {
        e.preventDefault();

        const newNoteReq = {
          title: "titulo",
          content: newNote,
          userId: 1
        };

        //Post a la API
        fetch("/api/notes", {
          method: "POST",
          headers: {
            // 'api-token' :  logUser.token,
            "Content-type": "aplication/json"
          },
          body: JSON.stringify(newNoteReq),
          
        })
          .then((res) => res.json())
          .then((json) => setNewNote(
              [
                {
                  ...newNoteReq,
                  ...json,
                },
              ].concat(newNote)
            )
          )

        // store.dispatch(noteActions.addNotes(newNote));
        // dispatch(addNotes(newNote))

        // console.log("REDUX", store.getState());
    };

    

    // const onChange = (e) => {
    //   const { value } = e.target;
    //   // Utilizamos el estado de redux
    //   setNewNote(value);
    // };
    
    return (
      <section aria-labelledby="admin-title">
        <h2 id="admin-title">Nueva Nota</h2>

        <form >
        
          <label htmlFor="note">Note:</label>

          <input 
              type="text" 
              id="note" 
              required
              placeholder="Escribe tu nota aquí..."
              value= {newNote}
              // onChange={onChange}
              onChange= {(e) => setNewNote(e.target.value)}
          />

          <div className="boton-login">
              <button 
                  type="submit" 
                  className="btn btn-primary" 
                  onClick={onSubmit}
                  >Añadir
              </button>
          </div>
        </form>
      </section>
    )
};
  
  export default CreateNote;

  //Admin.js