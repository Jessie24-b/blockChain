

export default function Login()

    {
        return (
            <div className="login-box">
    
            <h1>Inicio de sesión</h1>
            <form>
            <label >Nombre</label>
            <input type="text" placeholder="Ingrese su nombre"/>
           
            <label >Contraseña</label>
            <input type="password" placeholder="Ingrese su contraseña"/>
            <input type="submit" value="Ingresar"/>
            <a href="#">Olvidó su contraseña?</a><br/>
            <a href="#">No tienes una cuenta aún?</a>          
            </form>     
            </div>
        )    
}