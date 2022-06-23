import { useRouteMatch } from "react-router-dom";
import { Route, NavLink } from "react-router-dom";
import Me from "./Home"

const EditNote = () => {
    const match = useRouteMatch();
    return (
        <main>
        <h1>Editar la nota</h1>
            <p>
            Este es un trabajo basado en algo
            </p>
            <nav className="nav1">
                <NavLink to={`${match.url}/me`}>Sobre mí</NavLink>
            </nav>
            <Route path={`${match.url}/me`}>
                <Me />
            </Route>
        </main>
    );
}

export default EditNote;

//About.js