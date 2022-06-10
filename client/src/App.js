import { useEffect, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter as Router, Route } from "react-router-dom";


//Vistas
import Home from "./components/Home"; 
import About from "./components/About";
import { Link } from "react-router-dom";
import Hello from "./components/Hello";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./components/Admin";
import User from "./contexts/user";


// Componente principal de la aplicación.
const App = () => {
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  // Cargamos el estado del servidor
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setStatus(data.status === "ok"))
      .finally(() => setLoading(false));
  }, []);

  // Mostramos la aplicación
  return (
    <User.Provider value={{ signedIn, updateUser: setSignedIn }}>
      <Router>
        <ErrorBoundary message="Algo ha salido mal">
          <nav className="nav1">
            <Link to="/" exact>Inicio</Link>
            <Link to="/about">Sobre el curso</Link>{" "}
            {!signedIn && (
              <Link  to="/login">
                Iniciar sesión
              </Link>
            )}{" "}
            {signedIn && (
              <Link to="/private">
                Panel de administración
              </Link>
            )}
          </nav>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/hello/:name([a-zA-Z]*)">
            <Hello />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/private">
            <Admin/>
          </PrivateRoute>
        </ErrorBoundary>
      </Router>
    </User.Provider>
  );
};

export default App;
