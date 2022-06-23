import { useEffect, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/style.css";
import { Provider } from "react-redux";

import store from "./redux/store";


//Vistas
import { Link } from "react-router-dom";
import Hello from "./components/Hello";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./components/SignIn";
import User from "./contexts/user";
import NotFound from "./components/NotFound";
import CreateNote from "./vistas/CreateNote";
import NoteList from "./vistas/NoteList";
import EditNote from "./vistas/EditNote";
import SingleNote from "./vistas/SingleNote";
import Home from "./vistas/Home";
import Nav from "./components/Nav";


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
    <Provider store={store} >
      <Router>
        <div className="App">
          <ErrorBoundary message="Algo ha salido mal">
            <Nav user={ signedIn }/>
            <Switch>
              <Route path="/" exact>
                <Home/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/sing-in">
                <SignIn/>
              </Route>
              <Route path="/hello/:name([a-zA-Z]*)">
                <Hello />
              </Route>
              <Route path="/note-list">
                <NoteList/>
              </Route>
              <PrivateRoute path="/single-note">
                <SingleNote/>
              </PrivateRoute>
              <Route path="/create-note">
                <CreateNote/>
              </Route>
              <PrivateRoute path="/edit-note">
                <EditNote/>
              </PrivateRoute>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </ErrorBoundary>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
