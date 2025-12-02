import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-3">
              <span className="fw-bold">CrediSmart</span>
              <span className="small">Crédito rápido, decisión inteligente.</span>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <span className="small">Copyright © {new Date().getFullYear()} CrediSmart</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;