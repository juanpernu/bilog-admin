import React from 'react';
//import { Button } from '../../components/button';
import errorImage from '../../static/error_network.svg';
import './index.scss';

const NotFound = () => {
    return (
        <div className="error-view">
            <img className="error-image" src={errorImage} alt="Error logo" />
            <h2 className="error-title">Ups! Parece que la página no éxiste</h2>
            <p className="error-code">ERROR: 404 Not Found</p>
            {/* <Button href='/'>Ir al inicio</Button> */}
        </div>
    )
}

export default NotFound;
