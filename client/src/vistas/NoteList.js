import { getNotes } from "../selectors/notes";
import { useSelector, useDispatch } from "react-redux";


const NoteList = () => {
    
    const userName = "";
    const notes = useSelector((state) => getNotes(state));

    const dispatch = useDispatch();

    const onComplete = (i) => {};
    
    
    return (
        <main>

            <h2>Listado de notas</h2>

            <ul className="noteList">
                {notes.map((note, i) => {
                    <li
                        className={`noteList_item ${note.complete ? "completed" : ""}`}
                        key = {i}
                    >
                        <label htmlFor={`noteList_check-${i}`}>
                            <input
                                id={`noteList_check-${i}`}
                                type="checkbox"
                                disabled={note.complete}
                                onChange={()=> onComplete(i)}
                            />
                            {note.note}
                        </label>
                    </li>
                })}
            </ul>
        </main>
    );
};

export default NoteList;

//Hello.js en el curso