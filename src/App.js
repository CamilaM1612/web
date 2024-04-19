import { Routes, Route } from 'react-router-dom';
import './css/navbar.css';
import Horario from './pages/Horario';
import Home from './pages/Home';
import PlanEstudio from './pages/PlanEstudio';
import InicioSesion from './pages/InicioSesion';
import Registro from './pages/Registro';
import Default from './pages/Default';
import Perfil from './pages/Perfil';
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route element={<WithNavbar />}>
          <Route path="/horario" element={<Horario />} />
          <Route path="/planEstudio" element={<PlanEstudio />} />
          <Route path="/perfil" element={<Perfil/>}/>
          <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

function WithNavbar() {
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: 'white' }}>TecnoPlanner</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link style={{ color: 'white' }} href="/horario">Horario</Nav.Link>
              <Nav.Link style={{ color: 'white' }} href="/planEstudio">Mi Pensum</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="/perfil" style={{ color: 'white' }}><i class="bi bi-person-circle"></i></Nav.Link>         
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default App;