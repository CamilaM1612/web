import '../css/inicioSesion.css';
import EstudianteImage from '../images/estudianteUniversitario.png';
import Union from '../images/Union.svg'

const InicioSesion =() =>{
    return <div className="container-fluid">
    <div className="row" id="fondo">
      <div className="col-md-6" id="inicioSesion">
        <img src={Union} alt="cuadrado" width="60%" />
        <h1 className="bienvenido">Bienvenido</h1>
        <h2 className="tecnoplanner">TecnoPlanner</h2>

        <div className="titulo-inicio">
          <h3>Inicio Sesion</h3>
        </div>
        <div className="container-fluid" id="form-inicio">
          <form action="">
            <div className="grupo">
              <label htmlFor="correo">Correo Electrónico</label>
              <input type="text" name="correoElectronico" id="correo" />
            </div>
            <div className="grupo">
              <label htmlFor="contrasena">Contraseña</label>
              <input type="password" name="contrasena" id="contrasena" />
            </div>
            <button id="btnIniciarSesion">Iniciar sesión</button>
          </form>
        </div>
      </div>

      <div className="col-md-6" id="decoracion">
        <div id="logo">
          <img src='../images/logo.png' alt="logoTecno" width="90px" />
        </div>
        <div id="alumno">
          <img src={EstudianteImage} alt="estudiante" width="85%" />
        </div>
      </div>
    </div>
  </div>
}

export default InicioSesion;