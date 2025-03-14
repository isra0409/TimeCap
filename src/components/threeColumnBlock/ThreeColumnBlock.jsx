import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ThreeColumnBlock = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        {/* Primera columna */}
        <div className="col-md-4 mb-4">
          <h2 className="text-danger">Necesitas asesoria profesional?</h2>
          <p className="text-light">Brindamos asesoria personalizada, seguimientos, rutinas, todo lo necesario para que lleves tu salud fisica al siguiente nivel, rellena el siguiente formulario y nos pondremos en contacto con vos</p>
        </div>

        {/* <div className="col-md-4 mb-4">
          <h2 className="text-danger">Necesitas asesoria profesional?</h2>
          <p className="text-light">Brindamos asesoria personalizada, seguimientos, rutinas, todo lo necesario para que lleves tu salud fisica al siguiente nivel, rellena el siguiente formulario y nos pondremos en contacto con vos</p>
        </div>

        <div className="col-md-4 mb-4">
          <h2 className="text-danger">Necesitas asesoria profesional?</h2>
          <p className="text-light">Brindamos asesoria personalizada, seguimientos, rutinas, todo lo necesario para que lleves tu salud fisica al siguiente nivel, rellena el siguiente formulario y nos pondremos en contacto con vos</p>
        </div> */}
      </div>
    </div>
  );
};

export default ThreeColumnBlock;
