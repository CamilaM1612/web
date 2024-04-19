import '../css/perfil.css';
import Form from 'react-bootstrap/Form';

const Perfil = () => {
    return (
      <div>
        <div className="container-fluid">
      <div className="row" style={{ height: '100vh' }}>
        <div className="col-md-6" id="formulario">

          {/* <img src="cat.jpg" alt="Cat Image" className="img-fluid rounded-circle mb-3"> */}

          <div className="grupo-form">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" className="form-control" id="nombre" placeholder="Carlos Fabrizio" />
          </div>
          <div className="row">
            <div className="grupo-form col-md-6">
              <label htmlFor="apPaterno">Apellido Paterno</label>
              <input type="text" className="form-control" id="apPaterno" placeholder="Chavarria" />
            </div>
            <div className="grupo-form col-md-6">
              <label htmlFor="apMaterno">Apellido Materno</label>
              <input type="text" className="form-control" id="apMaterno" placeholder="Pereyra" />
            </div>
          </div>
          <div className="grupo-form">
            <label htmlFor="correo">Correo Electronico</label>
            <input type="email" className="form-control" id="correo" placeholder="example@gmail.com" />
          </div>
          <div className="grupo-form">
            <label htmlFor="codigoSis">Código Sis</label>
            <input type="text" className="form-control" id="codigoSis" placeholder="202002293" />
          </div>
          <div className="grupo-form">
            <label htmlFor="carrera">Carrera</label>
            <input type="text" className="form-control" id="carrera" placeholder="Licenciatura en Ingeniería Informática" />
          </div>
          <button type="submit" className="btn btn-primary">Registrar</button>
        </div>
        <div className="col-md-6" id="plan-estudio">

          <p className="carrera">Ingeniería Informática</p>
          <p><i className="bi bi-circle-fill" style={{ color: 'rgba(100, 131, 159, 1)' }}></i> Materias Aprobadas: 18</p>
          <p><i className="bi bi-circle-fill" style={{ color: 'rgb(126, 126, 126)' }}></i> Materias Restantes: 33</p>
          <div className="progress-spinner">
            <svg className="spinner" width="500" height="500" viewBox="0 0 100 100">
              <circle className="background" cx="50" cy="50" r="40"></circle>
              <circle className="foreground" cx="50" cy="50" r="40"></circle>
              <text className="percentage" x="50" y="53" textAnchor="middle">40%</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
      </div>
    );
  };
export default Perfil;