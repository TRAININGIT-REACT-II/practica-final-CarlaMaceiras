import { useLocation, useParams, useHistory   } from "react-router-dom";

//Esto saluda con el nombre del usuario

const Hello = () => {
    const params = useParams();
    const location = useLocation();
    const history = useHistory();

    const onClick = () => {
        history.goBack();
    };

    return (
        <section>
            <p>
                ¡Hola <b>{params.name}</b>! 
            </p>
            {location.state != null && location.state.msg != null && (
                <pre>
                    <code>{location.state.msg}</code>
                </pre>
            )};
            <button onClick={onClick}>Atrás</button>
        </section>
    );
};

export default Hello;