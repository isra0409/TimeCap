import React from "react";
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
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
            Los Jazmines 702, Salta capital.</p>
            <p><FaWhatsapp size={24} className="text-danger" /> Teléfono: +54 387 220 0578</p>
          </div>

          {/* Sección Redes Sociales */}
          <div className="col-md-4 mb-3 text-md-end">
            <h5 className="text-danger">Redes</h5>
            <div>
              <a href="#" className="text-light text-center"><FaInstagram size={24} /></a>
              {/* <a href="#" className="text-light me-3"><FaFacebook size={24} /></a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
