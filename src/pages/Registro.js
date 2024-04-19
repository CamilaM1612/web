import '../css/Registro.css';
import Form from 'react-bootstrap/Form';

const Registro = () => {
    return <div>

        <div className="row p-0">
            <div className="col-md-6" id='formRegistro'>
                <h2 className="text-center mb-2 text-degrade">Regístrate</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="nombres">Nombres</label>
                        <input type="text" className="campoRegistro" id="nombres" placeholder="Ingrese sus nombres" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="apellido_paterno">Apellido Paterno</label>
                        <input type="text" className="campoRegistro" id="apellido_paterno" placeholder="Ingrese su apellido paterno" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="apellido_materno">Apellido Materno</label>
                        <input type="text" className="campoRegistro" id="apellido_materno" placeholder="Ingrese su apellido materno" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contrasenia">Contraseña</label>
                        <input type="password" className="campoRegistro" id="contrasenia" placeholder="Ingrese su contraseña" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="codigo_sis">Código SIS</label>
                        <input type="text" className="campoRegistro" id="codigo_sis" placeholder="Ingrese su código SIS" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="carrera">Carrera</label>
                        <Form.Select aria-label="Default select example" className="campoRegistro" id="carrera">
                            <option>Ingrese su carrera</option>
                            <option value="1">One</option>
                        </Form.Select>
                    </div>
                    <div className='boton'>
                    <button type="submit" className="btn-reg">Registrarse</button>
                    </div>
                </form>
            </div>
            <div className="col-md-6" id='imagen'>

            </div>
        </div>

    </div>
}

export default Registro;