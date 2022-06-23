import { useState } from "react";
import { updateName } from "../redux/actions/user";

const SignIn = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();             //Para que no haga refresh por ser un form

        dispatch(updateName(name, password));
        console.log("REDUX", getState());
    }

    
    
    return (
        <div>
        <div className="separador"> 
            <p>Registrarse</p>
        </div>
      
        <div className= "card col-12 col-lg-4 login-card mt-2 hv-center">
          <form>
            
            <div class="mb-3">
              <label for="exampleInputName" class="form-label">Nombre</label>
              <input 
                type="text"  
                class="form-control" 
                id="exampleInputName" 
                value= {name}
                onChange= {(e) => setName(e.target.value)}
              />    
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Contraseña</label>
              <input 
                type="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                value= {password}
                onChange= {(e) => setPassword(e.target.value)}
                />
            </div>
  
            <div className="boton-login">
              <button 
                type="submit" 
                class="btn btn-primary" 
                onClick={handleClick}
                >Registrarse</button>
            </div>
          </form>
  
        </div>
      </div>
    );
}

export default SignIn;