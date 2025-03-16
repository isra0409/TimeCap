import TimeCapLanding from "./components/TimeCapLanding"
import Galeria from "./components/gallery/Galeria"
import Footer from "./components/footer/Footer"
import Nosotros from "./components/nosotros/Nosotros"
import ContactForm from "./components/contactForm/ContactForm"
import ThreeColumnBlock from "./components/threeColumnBlock/ThreeColumnBlock"
import Servicios from "./components/servicios/Servicios"
import Timeline from "./components/timeline/Timeline"
import "./styles.css"

function App() {

  return (
    <>
    <TimeCapLanding />
    <Nosotros />
    <Timeline />
    <Galeria />
    <Servicios />
    <ThreeColumnBlock />
    <ContactForm />
    <Footer />
    <div className="divpie">
      <p className="ppie">025 todos los derechos reservados @fastfrontwebs</p>
    </div>
    </>
  )
}

export default App
