import React, { logErrorToMyService } from 'react';
//import { Button } from '../../components/button';
import errorImage from '../../static/error_network.svg';
import './index.scss';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-view">
                    <img className="error-image" src={errorImage} alt="Error logo" />
                    <h2 className="error-title">Ups! Algo salió mal</h2>
                    <p className="error-code">ERROR: 400 Bad Request</p>
                    {/* <Button href='/'>Ir al inicio</Button> */}
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
