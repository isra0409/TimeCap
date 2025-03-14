import React from 'react';
import imgTomi from "../../assets/tomitc.jpeg"
import imgAgus from "../../assets/agustc.jpeg"
import "./styles.css"

const Nosotros = () => {
  return (
    <div className="container py-5">
      {/* Sección de introducción sobre el gimnasio */}
      <section className="text-center mb-5">
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR785TUZWIQZ1St5JOLJfyywXfu1OWDTyog&s"  // Sustituir por la URL de la imagen
          alt="Gimnasio TimeCap"
          className="img-fluid mb-4"
        /> */}
        <h2 className="font-weight-bold text-danger">¿Quiénes Somos?</h2>
        <p className="lead p-4">
        En TimeCap, somos más que un gimnasio, somos una familia. Creemos en el esfuerzo, la disciplina y, sobre todo, en apoyarnos unos a otros. Acá no importa si recién empezás o si ya sos un atleta avanzado, siempre vas a encontrar un equipo que te motiva a dar lo mejor.

Si querés entrenar, superarte y rodearte de gente que comparte tu pasión, este es tu lugar. ¡Sumate y viví la experiencia TimeCap!
        </p>
      </section>

      {/* Sección de Coaches */}
      <section className="row text-center">
        <div className="col-md-6 mb-4">
          <img
            src={imgTomi}  // Sustituir por la imagen del primer coach
            alt="Coach 1"
            className="img-fluid mb-3 img-coach"
            style={{ width: '300px', height: '300px' }}
          />
          <h5><strong>Tomás Villa Iturrieta</strong></h5>
          <p className='p-coach'>Empresario fitness, profesor de Educación Física, atleta de CrossFit y líder de nuestra comunidad. 
          Mi enfoque es motivar a los demás a superar sus límites y llevar una vida más saludable y activa entrenando.</p>
        </div>

        <div className="col-md-6 mb-4">
          <img
            src={imgAgus}  // Sustituir por la imagen del segundo coach
            alt="Coach 2"
            className="img-fluid mb-3 img-coach"
            style={{ width: '300px', height: '300px' }}
          />
          <h5><strong>Nombre del Coach 2</strong></h5>
          <p className='p-coach'>Empresario fitness, profesor de Educación Física, atleta de CrossFit y líder de nuestra comunidad. Mi enfoque es motivar a los demás a superar sus límites y llevar una vida más saludable y activa entrenando.</p>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
