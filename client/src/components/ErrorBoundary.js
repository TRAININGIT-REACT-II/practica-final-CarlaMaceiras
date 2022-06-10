import { Component } from "react";

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: false
        }
    }

    static getDerivedStateFromError() {
        return {
            error: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        //Si hay un error, que devuelva un mensaje y que aparezca un botón para reintentar y recargar la página 
        if (this.state.error === true) {
            return (
                <section>
                    <h1>{this.props.message}</h1>
                </section>
            );
        }

        return this.props.children;
    }
};

export default ErrorBoundary;