import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/icons/logo.jpg';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1a365d' }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img 
            src={logo} 
            alt="Logo CrediSmart" 
            style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
            className="me-2"
          />
          <span className="fw-bold">CREDISMART</span>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/') ? 'fw-bold' : ''}`} 
                to="/"
                style={isActive('/') ? { color: '#fff' } : {}}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/simulador') ? 'fw-bold' : ''}`} 
                to="/simulador"
                style={isActive('/simulador') ? { color: '#fff' } : {}}
              >
                Simulador
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/solicitar-credito') || isActive('/solicitar') ? 'fw-bold' : ''}`} 
                to="/solicitar-credito"
                style={(isActive('/solicitar-credito') || isActive('/solicitar')) ? { color: '#fff' } : {}}
              >
                Solicitar crédito
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;