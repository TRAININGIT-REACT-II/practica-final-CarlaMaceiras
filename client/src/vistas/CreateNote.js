import { useState } from "react";
import { useDispatch } from "react-redux";

import { addNotes } from "../redux/actions/notes";

const CreateNote = () => {
  
    const [newNote, setNewNote] = useState("");

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(addNotes(newNote));
    }

    const onChange = (e) => {
      const { value } = e.target;
      // Utilizamos el estado de redux
      setNewNote(value);
    };
    
    return (
      <section aria-labelledby="admin-title">
        <h2 id="admin-title">Nueva Nota</h2>

        <form onSubmit={onSubmit}>
        
          <label for="note">Note:</label>

          <input 
              type="text" 
              id="note" 
              required
              placeholder="Escribe tu nota aquí..."
              value= {newNote}
              onChange={onChange}
              // onChange= {(e) => setNewNote(e.target.value)}
          />

          <div className="boton-login">
              <button 
                  // type="submit" 
                  // class="btn btn-primary" 
                  // onClick={onSubmit}
                  >Añadir
              </button>
          </div>
        </form>
      </section>
    )
};
  
  export default CreateNote;

  //Admin.js