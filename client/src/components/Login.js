import { useContext } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import User from "../contexts/user";


const Login = () => {
    //Obtenemos el mensaje de la ruta si lo hubiera
    const { state } = useLocation();
    //Obtenemos el contexto del usuario
    const user = useContext(User);
    //Comprobamos si hay que mostrar el mensaje
    const displayAlert = state && state.msg != null && !user.signedIn;

    //Actualizamos el valor del usuario
    const onLogin = () => {
        user.updateUser(true);
    };

    return (
        <div>
        <div className="separador"> 
          <p>Login</p>
        </div>
        <div className= "card col-12 col-lg-4 login-card mt-2 hv-center">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> 
              
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>

            <div className="boton-login"> 
              <button type="submit" class="btn btn-primary">Log in</button>
            </div>

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