import { useContext, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import User from "../contexts/user";


const Login = () => {
    //Obtenemos el mensaje de la ruta si lo hubiera
    // const { state } = useLocation();
    // //Obtenemos el contexto del usuario
    // const user = useContext(User);
    // //Comprobamos si hay que mostrar el mensaje
    // const displayAlert = state && state.msg != null && !user.signedIn;

    // //Actualizamos el valor del usuario
    // const onLogin = () => {
    //     user.updateUser(true);
    // };

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [token, setToken] = useState("");

    const login = () => {
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        username: user,
        password: password
      })
    })
      .then((res) => res.json())
      // .then((json) => {
      //   if (json.error != null) {
      //     setError(json.error)
      //   } else {
      //     setToken(json.token);
      //     setError("");
      //   }
      // })
      .catch((err) => console.log(err));
    }


    return (
        <div>
        <div className="separador"> 
          <p>Login</p>
        </div>
        <div className= "card col-12 col-lg-4 login-card mt-2 hv-center">
          <form>
            <div className="mb-3">
              <label for="exampleInputName" class="form-label">Nombre</label>
              <input 
                type="text" 
                class="form-control" 
                id="exampleInputName"  
                aria-describedby="emailHelp" 
                value={user}
                onChange= {(e) => setUser(e.target.value)}
                /> 
              
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">Contraseña</label>
              <input 
                type="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                value={password}
                onChange= {(e) => setPassword(e.target.value)}
                />
            </div>

            {token.length === 0 && 
              <div className="boton-login"> 
                <button type="submit" class="btn btn-primary" onClick={login}>Iniciar sesión</button>
              </div>}
            {error.length > 0 && (
              <p>
                Hubo un error: <b>{error}</b>
              </p>
            )}

            <div className="registro">
              <div>
                <p>¿Aún no tienes cuenta?</p>
              </div>
              <div className="link">
                <Link  to={`/signup`}>Registrate</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
        // <section>
        //     <h2>Iniciar sesión</h2>
        //     {displayAlert && (
        //         <div className="login-alert" role="alert">
        //             {state.msg}
        //         </div>
        //     )}
        //     {user.signedIn ? (
        //         <p>Ya puedes acceder</p>
        //     ) : (
        //         <>
        //             <p>Haz click para iniciar sesión</p>
        //             <button onClick={onLogin}>Iniciar Sesión</button>
        //         </>
        //     )}
        // </section>
    );
};

export default Login;