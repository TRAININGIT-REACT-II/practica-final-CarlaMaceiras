import { getNotes } from "../selectors/notes";
import { useSelector, useDispatch } from "react-redux";
import { completeNote } from "../redux/actions/notes";
import { useState } from "react";

const NoteList = () => {
    
    const userName = "";
    const [notes, setNotes] = useState([]);
    const [error, setError] = useState("");

    const fetchNotes = () => {
        fetch("/api/notes"), {
            headers: {
                "api-token": token,
            }
        }
            .then((res) => { 
                return res.json()
            })
            .then((json) => {
                if (json.error != null) {
                    setError(json.error);
                } else {
                    setNotes(json);
                }
            })
            .catch((err) => console.log(err));
    }


    // const dispatch = useDispatch();

    // const onComplete = (i) => {
    //     dispatch(completeNote(i))
    // };

    useEffect(() => {
        fetchNotes();
    }), [token];
    
    
    return (
        <main>

            <h2>Listado de notas</h2>

            <ul className="noteList">
                {/* {notes.map((note, i) => {
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
                })} */}
                HOLA
                {notes}
            </ul>
        </main>
    );
};

export default NoteList;

//Hello.js en el curso