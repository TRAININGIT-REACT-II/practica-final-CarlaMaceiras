import { useRouteMatch } from "react-router-dom";
import { Route, NavLink } from "react-router-dom";
import Me from "./Me";

const About = () => {
    const match = useRouteMatch();
    return (
        <main>
        <h1>Trabajo final</h1>
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

export default About;