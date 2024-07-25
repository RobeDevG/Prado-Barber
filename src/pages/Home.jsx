
import Navbar from '../components/Navbar';
import './Home.css'; 
import imagenP from "../assets/Pastorita calle 168167.png";


const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h1><span>B</span>ienvenido a <span>B</span>arber <span>S</span>hop</h1>
          <p>Tu destino principal para todo lo relacionado con el cuidado de barba y cabello.</p>
          <a href='https://wa.me/+5363901233'><button  className="cta-button">Reservar Cita</button></a>
        </div>
      </section>
      <section className="about">
        <h2>Sobre Nosotros</h2>
        <div className='container-abaut'>
        <p>¡Hola! Soy Raúl Prado, un barbero apasionado con experiencia en el arte de la barbería. En mi salón, te garantizo un corte impecable y una experiencia personalizada. ¡Resalta tu estilo conmigo!</p>
        <img src={imagenP} alt=""/>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 Barber Shop. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
