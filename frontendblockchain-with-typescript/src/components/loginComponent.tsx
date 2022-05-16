import { useState } from "react"
import {User} from '../types'
import getUsers from '../service/loginService'

interface LoginState {
    inputValues: User 
}

interface FormLogin {
    onLoginUser: () => {}
}

export default function Login()

    {

        const [inputValues, setInputValues] = useState<LoginState["inputValues"]>({
            user: '',
            password: ''
        })

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            console.log(inputValues)
        }

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

            setInputValues({
                ...inputValues,
                [e.target.name]: e.target.value
            })

               
        }

        return (
            <div className="login-box">
    
            <h1>Inicio de sesión</h1>
            <form onSubmit={handleSubmit}>
            <label >Nombre de usuario</label>
            <input type="text" onChange={handleChange} name="user" placeholder="Ingrese su nombre"/>
           
            <label >Contraseña</label>
            <input type="password" onChange={handleChange} name="password" placeholder="Ingrese su contraseña"/>
            <input type="submit" value="Ingresar"/>
            <a href="#">Olvidó su contraseña?</a><br/>
            <a href="#">No tienes una cuenta aún?</a>          
            </form>     
            </div>
        )    
}