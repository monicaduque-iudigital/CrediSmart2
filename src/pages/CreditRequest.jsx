import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import creditRequestImage from '../assets/images/creditRequest/creditRequest.jpg';
import logoImage from '../assets/images/icons/logo.jpg';
import Footer from '../components/Footer';

const CreditRequest = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    primerApellido: '',
    segundoApellido: '',
    numeroCedula: '',
    celular: '',
    chkDatos: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar campos obligatorios
    const camposObligatorios = [
      { nombre: 'nombre', etiqueta: 'Nombre' },
      { nombre: 'primerApellido', etiqueta: 'Primer apellido' },
      { nombre: 'numeroCedula', etiqueta: 'Número de cédula' },
      { nombre: 'celular', etiqueta: 'Número de celular' },
      { nombre: 'chkDatos', etiqueta: 'Debes autorizar los tratamientos de datos personales' }
    ];

    // Buscar campos vacíos
    const camposVacios = camposObligatorios.filter(campo => {
      // Verificar si el campo es el checkbox de autorización
      if (campo.nombre === 'chkDatos') {
        return !formData[campo.nombre];
      }
      // Verificar si el campo está vacío o solo tiene espacios en blanco
      return !formData[campo.nombre] || formData[campo.nombre].trim() === '';
    });

    // Si hay campos vacíos, mostrar alerta
    if (camposVacios.length > 0) {
      const mensaje = `Por favor complete los siguientes campos obligatorios:\n\n${camposVacios.map(campo => `- ${campo.etiqueta}`).join('\n')}`;
      alert(mensaje);
      return; // Detener el envío del formulario
    }

    // Si no hay campos vacíos, continuar con el envío
    console.log('Datos del formulario:', formData);
    
    // Mostrar mensaje de éxito
    alert('¡Solicitud enviada con éxito! Hemos recibido tu información y la estamos procesando.');
    
    // Limpiar el formulario
    setFormData({
      nombre: '',
      primerApellido: '',
      segundoApellido: '',
      numeroCedula: '',
      celular: '',
      chkDatos: false
    });
    
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar is rendered by the App component */}
      
      <main className="flex-grow-1 py-3">
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-10 mb-0">
              <div className="card border-0">
                <div className="row g-0">
                  {/* Formulario */}
                  <div className="col-12 col-lg-6 p-4 p-lg-5" style={{ backgroundColor: '#fff' }}>
                    <div className="mb-4 text-center text-lg-start">
                      <h1 className="h3 fw-bold" style={{ color: "#8BC34A" }}>Solicitar Crédito</h1>
                      <p className="text-muted">Realiza tu solicitud de crédito de manera rápida</p>
                    </div>
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          placeholder="Escribe tu nombre"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="primerApellido" className="form-label">Primer apellido<span className="text-danger">*</span></label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="primerApellido"
                          name="primerApellido"
                          value={formData.primerApellido}
                          onChange={handleChange}
                          placeholder="Escribe tu apellido"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="segundoApellido" className="form-label">Segundo apellido</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="segundoApellido"
                          name="segundoApellido"
                          value={formData.segundoApellido}
                          onChange={handleChange}
                          placeholder="Escribe tu apellido"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="numeroCedula" className="form-label">Número de cédula<span className="text-danger">*</span></label>
                        <input 
                          type="text" 
                          inputMode="numeric" 
                          className="form-control" 
                          id="numeroCedula"
                          name="numeroCedula"
                          value={formData.numeroCedula}
                          onChange={handleChange}
                          placeholder="Escribe tu cédula"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="celular" className="form-label">Número de celular<span className="text-danger">*</span></label>
                        <div className="input-group">
                          <span className="input-group-text">+57</span>
                          <input 
                            type="tel" 
                            className="form-control" 
                            id="celular"
                            name="celular"
                            value={formData.celular}
                            onChange={handleChange}
                            placeholder="Escribe tu celular"
                            required
                          />
                        </div>
                      </div>
                      <p className="small text-secondary">*Datos obligatorios</p>
                      <div className="form-check mb-3">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="chkDatos" 
                          name="chkDatos"
                          checked={formData.chkDatos}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-check-label" htmlFor="chkDatos">
                          Autorizo el tratamiento de datos personales
                        </label>
                      </div>
                      <button type="submit" className="btn btn-success" style={{ backgroundColor: '#8BC34A', border: 'none' }}>
                        Solicitar Crédito
                      </button>
                    </form>
                  </div>
                  
                  {/* Imagen */}
                  <div className="col-lg-6 d-none d-lg-flex align-items-center">
                    <div className="w-100" style={{ padding: '1.5rem' }}>
                      <img 
                        src={creditRequestImage} 
                        alt="Solicita tu crédito" 
                        className="w-100 rounded-4" 
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center',
                          maxHeight: '500px',
                          boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    <div className="mt-0"></div>
          <Footer />
    </div>
  );
};

export default CreditRequest;