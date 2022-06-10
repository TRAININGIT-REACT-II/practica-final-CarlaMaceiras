import { Redirect, Route } from "react-router-dom";
import React, { useContext } from "react";
import User from "../contexts/User";

const PrivateRoute = ({ children, ...others}) => {
    const {signedIn } = useContext(User);

    return (
        <Route
            {...others}
            render={() => {
                if (signedIn) {
                    return children;
                } else {
                    return (
                        <Redirect 
                        to={{ pathname: "/login", state: { msg: "Haz login primero." }}} 
                        /> 
                    );
                }
            }}
        />
    );
};

export default PrivateRoute;