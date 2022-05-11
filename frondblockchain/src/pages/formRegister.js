import React, { Component } from 'react'


class formRegister extends Component {
    render() {
        return (

            <form className='form'>
                <div className="container">


                    <div className="row">

                        <div className="col-1">
                            <label className="label" for="username">Username</label>
                        </div>

                        <div className="col-5">
                            <input className='form-control is-invalid' type="text" id="username" name="username" required />
                            <div className="invalid-feedback" id="errorCode"></div>
                            <div className="valid-feedback">* Correcto * </div>

                        </div>


                        <div className="col-1">
                            <label className="label" for="nombre">Nombre</label>
                        </div>
                        <div className="col-5">
                            <input className='form-control is-invalid' type="text" id="nombre" name="nombre" required />
                            <div className="invalid-feedback" id="errorCode"></div>
                            <div className="valid-feedback">* Correcto * </div>
                        </div>
                    </div>




                    <div className="row">
                        <div className="col-1">
                            <label for="apellido">Apellido</label>
                        </div>
                        <div className="col-5">
                            <input className='form-control is-invalid' type="text" id="apellido" name="apellido" placeholder="Apellido" required />
                            <div className="invalid-feedback" id="errorCode"></div>
                            <div className="valid-feedback">* Correcto * </div>
                        </div>

                        <div className="col-1">
                            <label for="email">Correo</label>
                        </div>
                        <div className="col-5">
                            <input className='form-control is-invalid' type="email" id="email" name="email" placeholder="exameple@gmail.com" required />
                            <div className="invalid-feedback" id="errorCode"></div>
                            <div className="valid-feedback">* Correcto * </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-1">
                            <label for="fechaNacimiento">Fecha nacimiento</label>
                        </div>
                        <div className="col-5">
                            <input className='form-control is-invalid' type="date" id="fechaNacimiento" name="fechaNacimiento" required />
                            <div className="invalid-feedback" id="errorCode"></div>
                            <div className="valid-feedback">* Correcto * </div>
                        </div>

                        <div className="col-1">
                            <label for="contrasenia">Contraseña</label>
                        </div>
                        <div className="col-5">
                            <input className='form-control is-invalid' type="password" id="contrasenia" name="contrasenia" required />
                            <div className="invalid-feedback" id="errorCode"></div>
                            <div className="valid-feedback">* Correcto * </div>
                        </div>

                    </div>


                    <button className='btn btn-primary' type="submit" >Registrar</button>
                    <button className='btn btn-secondary' type="button" >Cancelar</button>
                </div>
            </form >
        )
    }
}

export default formRegister;
