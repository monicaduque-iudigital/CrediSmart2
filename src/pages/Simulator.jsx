import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Simulator = () => {
  const [monto, setMonto] = useState(1000000);
  const [plazo, setPlazo] = useState(6);
  const [cuota, setCuota] = useState(0);
  const [errorMonto, setErrorMonto] = useState('');

  // Tasa de interés mensual (1.5%)
  const tasaInteres = 0.015;

  const validarMonto = (valor) => {
    if (valor < 1000000) {
      setErrorMonto('El monto mínimo del crédito es de $1.000.000');
      return false;
    }
    if (valor > 500000000) {
      setErrorMonto('Se ha superado el valor máximo a prestar de $500.000.000');
      return false;
    }
    setErrorMonto('');
    return true;
  };

  const calcularCuota = (e) => {
    e.preventDefault();
    
    if (!validarMonto(monto)) {
      return;
    }
    
    // Fórmula de cuota fija con interés compuesto
    const cuotaMensual = (monto * tasaInteres * Math.pow(1 + tasaInteres, plazo)) / 
                         (Math.pow(1 + tasaInteres, plazo) - 1);
    setCuota(Math.round(cuotaMensual));
  };

  const formatearMoneda = (valor) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(valor);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">

        {/* Header */}
        <header className="py-5 bg-body-tertiary border-bottom">
          <div className="container text-center">
            <h1 className="display-5 fw-bold mb-2"style={{ color: "#8BC34A" }}>Simulador de Crédito</h1>
            <p className="mb-0 text-secondary">
              Calcula el valor de la cuota o el monto que puedes solicitar de acuerdo a las necesidades de crédito y capacidad de pago.
            </p>
          </div>
        </header>

        {/* Características */}
        <section className="py-4">
          <div className="container">
            <div className="text-white p-4 rounded-3 mb-4" style={{ backgroundColor: '#1a365d' }}>
              <h2 className="text-center mb-4">Requisitos</h2>
              <div className="row g-4 text-center justify-content-center">
                <div className="col-12 col-md-4">
                  <i className="bi bi-person fs-3 d-block mb-2"></i>
                  <div className="small">
                    Edad entre<br/><span className="fw-semibold">18 y 84</span>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <i className="bi bi-cash-stack fs-3 d-block mb-2"></i>
                  <div className="small">
                    Monto mínimo<br/><span className="fw-semibold">$1.000.000</span>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <i className="bi bi-calendar-event fs-3 d-block mb-2"></i>
                  <div className="small">
                    Plazo entre<br/><span className="fw-semibold">6 y 84 meses</span>
                  </div>
                </div>
              </div>
              <p className="small text-center mt-3 mb-0">
                Aprobación sujeta a estudio de crédito y políticas de CrediSmart
              </p>
            </div>
          </div>
        </section>

        <p className="text-center text-secondary mb-0">
          Ingresa los datos y calcula la cuota aproximada del crédito
        </p>

        {/* Formulario de simulación */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-7">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <form onSubmit={calcularCuota}>
                      <div className="mb-4">
                        <label className="form-label fw-bold" style={{ color: "#8BC34A" }}>Valor del crédito</label>
                        <div className="input-group input-group-lg">
                          <span className="input-group-text">$</span>
                          <input 
                            type="text" 
                            inputMode="numeric" 
                            className={`form-control ${errorMonto ? 'is-invalid' : ''}`}
                            placeholder="0" 
                            aria-label="Valor del crédito"
                            value={monto.toLocaleString('es-CO')}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '');
                              const valorNumerico = Number(value) || 0;
                              setMonto(valorNumerico);
                              validarMonto(valorNumerico);
                            }}
                          />
                          {errorMonto && (
                            <div className="invalid-feedback">
                              {errorMonto}
                            </div>
                          )}
                        </div>
                        <div className="form-text">
                          Monto mínimo: $1.000.000 - Monto máximo: $500.000.000
                        </div>
                      </div>

                      <div className="mb-4">
                       <label className="form-label fw-bold" style={{ color: "#8BC34A" }}>¿A cuántos meses?
                       </label>
                        <input
                          type="range"
                          className="form-range"
                          min="6"
                          max="84"
                          step="1"
                          value={plazo}
                          onChange={(e) => setPlazo(Number(e.target.value))}
                        />
                        <div className="d-flex justify-content-between small text-secondary">
                          <span>6 meses</span>
                          <span>{plazo} meses</span>
                          <span>84 meses</span>
                        </div>
                      </div>

                      <button 
                        type="submit"
                        className="btn btn-success btn-lg w-100"
                      >
                        Simular crédito
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="card shadow-sm sticky-top" style={{top: '20px'}}>
                  <div className="card-body">
                    <h5 className="card-title"style={{ color: "#8BC34A" }}>Cuota aproximada</h5>
                    <p className="display-6 mb-1">{formatearMoneda(cuota)}</p>
                    <div className="small text-secondary">
                      Los datos son de referencia y no representan la oferta final.
                    </div>
                    <hr />
                    <ul className="list-unstyled small mb-0">
                      <li className="d-flex justify-content-between">
                        <span>Monto:</span>
                        <span>{formatearMoneda(monto)}</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Plazo:</span>
                        <span>{plazo} meses</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Tasa mensual:</span>
                        <span>1.50%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Simulator;
