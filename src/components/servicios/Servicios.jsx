export default function Servicios() {
    const servicios = [
      { nombre: "CrossFit", icono: "🔥" },
      { nombre: "Funcional", icono: "💪" },
      { nombre: "Musculación", icono: "🏋️" },
      { nombre: "GAP", icono: "🦵" },
      { nombre: "Pilates", icono: "🧘" },
      { nombre: "Spinning", icono: "🚴" },
      { nombre: "Rehabilitación de lesiones", icono: "🩹" },
      { nombre: "Preparación física adaptada a deportistas", icono: "⚽" }
    ];
  
    return (
      <section className="container py-5 text-center" id="services">
        <h2 className="text-danger fw-bold mb-4">Nuestras actividades</h2>
        <div className="row g-4">
          {servicios.map((servicio, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-lg p-3 bg-dark text-white rounded-4 h-100">
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="display-3 mb-3">{servicio.icono}</div>
                  <h5 className="card-title fw-bold">{servicio.nombre}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  