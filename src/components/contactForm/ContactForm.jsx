import React from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  return (
    
    <div className="container mt-5">
      <h2 className="text-center text-danger fw-bold mb-4">Contáctanos</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="bg-dark text-light p-4 rounded shadow">
            {/* Nombre */}
            <div className="mb-3">
              <label className="form-label"><FaUser className="text-danger me-2" />Nombre</label>
              <input type="text" className="form-control" placeholder="Tu nombre" required />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label"><FaEnvelope className="text-danger me-2" />Email</label>
              <input type="email" className="form-control" placeholder="tuemail@example.com" required />
            </div>

            {/* Mensaje */}
            <div className="mb-3">
              <label className="form-label"><FaCommentDots className="text-danger me-2" />Mensaje</label>
              <textarea className="form-control" rows="4" placeholder="Escribe tu mensaje" required></textarea>
            </div>

            {/* Botón de envío */}
            <div className="text-center">
              <button type="submit" className="btn btn-danger w-100">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
