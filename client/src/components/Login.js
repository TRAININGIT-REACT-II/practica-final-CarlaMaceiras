import { useContext } from "react";
import { useLocation } from "react-router";
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
        <section>
            <h2>Iniciar sesión</h2>
            {displayAlert && (
                <div className="login-alert" role="alert">
                    {state.msg}
                </div>
            )}
            {user.signedIn ? (
                <p>Ya puedes acceder</p>
            ) : (
                <>
                    <p>Haz click para iniciar sesión</p>
                    <button onClick={onLogin}>Iniciar Sesión</button>
                </>
            )}
        </section>
    );
};

export default Login;