import React, { Component } from 'react'

class login extends Component {
    render() {
        return (
            <div class="fondoLogin">

            <div className='container' >
                <div className='row'>
                <div className='col-6'>
                    <label className='text-white formLogin'>
                        imagen o gif decorativo
                    </label>
                </div>
                <div className='col-6  align-items-center' >
                    <form class="formLogin " >
                        <h3>Inicio de sesión</h3>
                        <div className="mb-3">
                            <label className='text-white'>Correo electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Ingrese el correo"
                            />
                        </div>
                        <div className="mb-3">
                            <label className='text-white'>Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Ingrese la contraseña"
                            />
                        </div>
                        <div className="mb-3">
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                />
                                <label className="custom-control-label text-white" htmlFor="customCheck1">
                                    Recordarme
                                </label>
                            </div>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right">
                            Olvide <a href="#">Contraseña?</a>
                        </p>
                        <p className="forgot-password text-right">
                            Registrate   <a href="#">Aquí</a>
                        </p>
                    </form>

                </div>
                </div>
                

            </div>
            </div>

        )
    }
}
export default login;
