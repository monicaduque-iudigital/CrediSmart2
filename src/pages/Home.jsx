import React from 'react';
import { Link } from 'react-router-dom';
import creditsData from '../data/creditsData';
import Footer from '../components/Footer';

// Importar imágenes
import bannerHome from '../assets/images/home/banner-home.jpg';
import creditoVivienda from '../assets/images/home/credito-vivienda.jpg';
import creditoVehiculo from '../assets/images/home/credito-vehiculo.jpg';
import creditoPersonal from '../assets/images/home/credito-personal.jpg';
import creditoEstudio from '../assets/images/home/credito-estudio.jpg';
import creditoLibreInversion from '../assets/images/home/credito-libre-inversion.jpg';
import compraCartera from '../assets/images/home/compra-cartera.jpg';
import logo from '../assets/images/icons/logo.jpg';

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <header className="bg-light">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3" style={{ color: "#1a365d" }}>Explora nuestras opciones de crédito</h1>
              <p className="lead mb-4">Crédito rápido, decisión inteligente</p>
              <div className="d-flex gap-3">
                <Link to="/solicitar-credito" className="btn btn-success btn-lg">Solicitar crédito</Link>
                <Link to="/simulador" className="btn btn-outline-secondary btn-lg">Simular Crédito</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img 
                  src={bannerHome} 
                  alt="Familia feliz con su nuevo hogar" 
                  className="img-fluid rounded shadow" 
                  style={{ maxHeight: '400px', width: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Credit Cards Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ 
              display: 'inline-block',
              position: 'relative',
              color: '#1a365d',
              fontSize: '2rem',
              textTransform: 'uppercase',
              marginBottom: '2rem'
            }}>
              Opciones de crédito
              <div style={{
                height: '4px',
                width: '60px',
                backgroundColor: '#8BC34A',
                margin: '10px auto 0',
                borderRadius: '2px'
              }}></div>
            </h2>
          </div>
          <div className="row g-4">
            {creditsData.map((credit) => (
              <div key={credit.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-img-top" style={{ height: '200px', overflow: 'hidden' }}>
                    <img 
                      src={
                        credit.id === 1 ? creditoVivienda :
                        credit.id === 2 ? creditoVehiculo :
                        credit.id === 3 ? creditoPersonal :
                        credit.id === 4 ? creditoEstudio :
                        credit.id === 5 ? creditoLibreInversion :
                        compraCartera
                      } 
                      alt={credit.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-regular"style={{ color: "#1a365d" }}>{credit.title}</h5>
                    <p className="card-text text-muted">{credit.description}</p>
                    <ul className="list-unstyled">
                      <li><strong>Tasa de interés:</strong> {credit.interest}</li>
                      <li><strong>Monto disponible:</strong> {credit.amount}</li>
                      <li><strong>Plazo máximo:</strong> {credit.term}</li>
                    </ul>
                    <div className="d-grid">
                      <Link to="/solicitar-credito" className="btn btn-outline-success">
                        Solicitar crédito <i className="bi bi-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;