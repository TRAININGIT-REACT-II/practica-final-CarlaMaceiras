import { NavLink } from "react-router-dom";

const Nav = ({ signedIn }) => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Mis Notas</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NavLink className="nav-link" to="/" exact>Home</NavLink>
                {!signedIn && (
                <div className="div-nav-link">
                  <NavLink  className="nav-link" to="/login">
                    Log In
                  </NavLink>
                  <NavLink  className="nav-link" to="/sing-in">
                    Registrarse
                  </NavLink>
                </div>
                )}{" "}
                {signedIn && (
                  <NavLink className="nav-link" to="/note-list">
                    Todas las notas
                  </NavLink>,
                  <NavLink className="nav-link" to="/create-note">
                    Crear una nota
                  </NavLink>
                )}
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Nav;