import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          
          <div className="bg-dark text-light p-5 rounded shadow text-center">
            
            <FaWhatsapp
              size={70}
              className="text-success mb-4"
            />

            <h2 className="fw-bold mb-3 text-danger">
              ¿Querés comunicarte con nosotros?
            </h2>

            <p className="mb-4">
              Escribinos directamente por WhatsApp y te respondemos lo antes posible.
            </p>

            <a
              href="https://wa.me/5493513456407"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg w-100 fw-bold"
            >
              Hablar por WhatsApp
            </a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;