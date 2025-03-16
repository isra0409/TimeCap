import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"

const ThreeColumnBlock = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        {/* Primera columna */}
        <div className="col-md-4 mb-4">
          <h2 className="txtp text-danger">Necesitas asesoria personalizada?</h2>
          <p className="txtp text-light">Brindamos asesoria personalizada, seguimientos, rutinas, todo lo necesario para que lleves tu salud fisica al siguiente nivel, rellena el siguiente formulario y nos pondremos en contacto con vos.</p>
        </div>

        <div className="col-md-4 mb-4">
          <h2 className="txtp text-danger">Tenes consultas apartes? Escribinos.</h2>
          <p className="txtp text-light">Podes contactarte con nosotros via e-mail, via wpp o rellenando el siguiente formulario y nos pondremos en contacto con vos a la brevedad.</p>
        </div>

        <div className="txtp col-md-4 mb-4">
          <h2 className="text-danger">Te gustaria trabajar con nosotros?</h2>
          <p className="txtp text-light">Estamos en la busqueda activa y constante de profesores para nuestro gim. Si pensas que tenes las condiciones o sos profe de alguna disciplina, mandanos un mensaje y trabajemos juntos! </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnBlock;
