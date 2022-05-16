import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navbar(){
    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Consultor&iacute;a sistema legal</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
             <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
              
                <i></i>
                    <a className="nav-link disabled" href="#">Configuraci&oacute;n </a>
                </li>

                <div className="row">
                    <div className="col">
                        One of three columns
                    </div>
                </div>
            </ul>
        </div>
    </nav>

    );
}

export default Navbar