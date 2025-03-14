import React from "react";
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="footcontainer row text-center text-md-start">

          {/* Sección Contacto */}
          <div className="col-md-4 mb-3">
            <h5 className="text-danger">Contacto</h5>
            <p><FaMapMarkerAlt className="text-danger" /> Ubicación: 
            Los Jazmines 702, Salta. (3 Cerritos)</p>
            <p><FaPhone className="text-danger" /> Teléfono: +54 387 220 0578</p>
          </div>

          {/* Sección Redes Sociales */}
          <div className="col-md-4 mb-3 text-md-end">
            <h5 className="text-danger">Síguenos</h5>
            <div>
              <a href="#" className="text-light me-3"><FaInstagram size={24} /></a>
              <a href="#" className="text-light"><FaFacebook size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
