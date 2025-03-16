import { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import "./styles.css";
import { motion } from "framer-motion";

const TimeCapLanding = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const services = [
    "CrossFit",
    "Funcional",
    "Musculación",
    "GAP",
    "Pilates",
    "Spinning",
    "Rehabilitación",
    "Preparación física",
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            TimeCap Training
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={navbarExpanded ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={() => setNavbarExpanded(!navbarExpanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              navbarExpanded ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Actividades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header
        className="hero-section position-relative text-white d-flex align-items-center"
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Imagen de fondo con blur */}
        <div
          className="hero-bg"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(https://images.unsplash.com/photo-1556817411-df27c6ec6e4c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(3px)", // Aplica el blur solo a la imagen
          }}
        ></div>

        {/* Contenedor principal */}
        <div className="mobilecolumn container d-flex justify-content-between align-items-center w-100 position-relative">
          {/* Texto y Botón de Acción */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hero-text"
          >
            <h1 className="display-4 fw-bold">Somos TimeCap Training</h1>
            <p className="lead">Supera tus límites. Entrena con nosotros.</p>
            <a href="#contacto" className="btn btn-secondary btn-lg">
              Quiero info
            </a>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-logo-box"
          >
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/013/146/831/small/body-builder-lifting-a-dumbbell-png.png"
              alt="TimeCap Training Logo"
              className="hero-logo"
              style={{ maxWidth: "200px" }}
            />
          </motion.div>
        </div>
      </header>

      {/* Contact */}
      {/* <section id="contact" className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contáctanos</h2>
          <p className="text-center">
            Ubicación, teléfono, email, redes sociales...
          </p>
        </div>
      </section> */}
    </>
  );
};

export default TimeCapLanding;
