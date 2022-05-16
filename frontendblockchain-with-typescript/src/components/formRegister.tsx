import { useState } from "react";


function formRegister (){

    const initialState = {
        nombreUsuario: "",
        contrasenia: "",
        nombre:"",
        apellido:"",
        correo:"",
        fechaNacimiento:""

    };

    const handleSubmit=()=>{}
    const handleChange=()=>{

    }

    return(

        <form className='form' onSubmit={handleSubmit}>
        <div className="container">


            <div className="row">

                <div className="col-1">
                    <label className="label" htmlFor="username">Username</label>
                </div>

                <div className="col-5">
                    <input className='form-control is-invalid' type="text" id="username" name="username" required />
                    <div className="invalid-feedback" id="errorCode">*Campo requerido*</div>
                    <div className="valid-feedback">* Correcto * </div>

                </div>


                <div className="col-1">
                    <label className="label" htmlFor="nombre">Nombre</label>
                </div>
                <div className="col-5">
                    <input className='form-control is-invalid' type="text" id="nombre" name="nombre" required />
                    <div className="invalid-feedback" id="errorCode">*Campo requerido*</div>
                    <div className="valid-feedback">* Correcto * </div>
                </div>
            </div>




            <div className="row">
                <div className="col-1">
                    <label htmlFor="apellido">Apellido</label>
                </div>
                <div className="col-5">
                    <input className='form-control is-invalid' type="text" id="apellido" name="apellido" placeholder="Apellido" required />
                    <div className="invalid-feedback" id="errorCode">*Campo requerido*</div>
                    <div className="valid-feedback">* Correcto * </div>
                </div>

                <div className="col-1">
                    <label htmlFor="email">Correo</label>
                </div>
                <div className="col-5">
                    <input className='form-control is-invalid' type="email" id="email" name="email" placeholder="exameple@gmail.com" required />
                    <div className="invalid-feedback" id="errorCode">*Campo requerido*</div>
                    <div className="valid-feedback">* Correcto * </div>
                </div>
            </div>

            <div className="row">
                <div className="col-1">
                    <label htmlFor="fechaNacimiento">Fecha nacimiento</label>
                </div>
                <div className="col-5">
                    <input className='form-control is-invalid' type="date" id="fechaNacimiento" name="fechaNacimiento" required />
                    <div className="invalid-feedback" id="errorCode">*Campo requerido*</div>
                    <div className="valid-feedback">* Correcto * </div>
                </div>

                <div className="col-1">
                    <label htmlFor="contrasenia">Contraseña</label>
                </div>
                <div className="col-5">
                    <input className='form-control is-invalid' type="password" id="contrasenia" name="contrasenia" required />
                    <div className="invalid-feedback" id="errorCode">*Campo requerido*</div>
                    <div className="valid-feedback">* Correcto * </div>
                </div>

            </div>


            <button className='btn btn-primary' type="submit" >Registrar</button>
            <button className='btn btn-secondary' type="button" >Cancelar</button>
        </div>
    </form >

    );

}

export default formRegister


    
