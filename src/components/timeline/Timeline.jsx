import React from 'react'
import "./styles.css"

const Timeline = () => {

    const timelineData = [
        {
          date: "2024 - Hoy",
          title: "Fundador de TimeCap Training",
          description:
            "Con el apoyo de mi familia y mi compañera Agus, creamos TimeCap Training, mi propio centro de entrenamiento especializado en fuerza y rendimiento deportivo.",
        },
        {
          date: "2023",
          title: "Coach en gimnasio especializado en CrossFit",
          description:
            "Durante todo el año 2023, trabajé en un gimnasio especializado en CrossFit, perfeccionando mis habilidades como entrenador y preparador físico.",
        },
        {
          date: "2022",
          title: "Inicia mi camino como emprendedor",
          description:
            "Me recibí como Profesor Universitario en Educación Física y comencé mi camino como emprendedor en Alto Voltaje, un gimnasio especializado en fuerza y calistenia junto a Alfredo y Ana.",
        },
        {
          date: "2020 - Hoy",
          title: "Atleta de CrossFit",
          description:
            "Después de jugar al rugby desde los 4 años hasta 2020, cambié de rubro al CrossFit, donde actualmente soy atleta y me especializo en fuerza y potencia.",
        },
        {
          date: "Varios años",
          title: "Experiencia en distintos gimnasios y clubes",
          description:
            "Trabajé en diversos establecimientos deportivos, incluyendo clubes de rugby, gimnasios de musculación, rehabilitación y entrenamientos funcionales/CrossFit.",
        },
        {
          date: "Titulos",
          title: "Coach y Preparador Físico",
          description:
            "Soy Coach de CrossFit Level 1 y Level 2, además de Preparador Físico de UAR Level 1 y Level 2, con especialización en fuerza y potencia.",
        }
      ];

  return (
          <section id="trayectoria" className="container ">
        <h2 className="text-center fw-bold text-danger mb-4">Trayectoria</h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="timeline-item d-flex align-items-center justify-content-center"
            >
              <div className="timeline-date-container">
                <div className="timeline-date">{item.date}</div>
              </div>
              <div className="timeline-content-container">
                <div className="timeline-title">{item.title}</div>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Timeline
