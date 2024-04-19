import Accordion from 'react-bootstrap/Accordion';
import '../css/horario.css';
const Horario = () => {
    return <div>
       <div className='row'>
       <div className="col-md-3" id="barraMaterias">
        <span className='carrera mb-4'>Ingenieria Informatica</span>
 
           <div className='listaNiveles'>
           <Accordion defaultActiveKey={['0']} alwaysOpen className='acordeon'>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Nivel A</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Algebra 1</li>
                            <li>Calculo 1</li>
                            <li>Ingles 1</li>
                            <li>Fisica General</li>
                            <li>Introduccion a la programacion</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
           </div>
        </div>
        <div className="col-md-9" id="calendario">
        </div>
       </div>
    </div>
}

export default Horario;