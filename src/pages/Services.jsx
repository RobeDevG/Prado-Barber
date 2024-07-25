
import './Services.css' 
import barberImage from '../assets/Corte-de-pelo.webp';
import barberImage2 from '../assets/Corte-de-barba.webp';
import barberImage3 from '../assets/Afeitado.webp';
import Navbar from '../components/Navbar';

const Services = () => {
  return (
    <>
    <Navbar/>
    <section className="services">
      <h2>Nuestros Servicios</h2>
      <div className="services-grid">
        <div className="service">
          <img src={barberImage} alt="Corte de Pelo" />
          <h3>Cortes de Pelo</h3>
          <p>Cortes profesionales para satisfacer tu estilo.</p>
        </div>
        <div className="service">
          <img src={barberImage2} alt="Recorte de Barba" />
          <h3>Recortes de Barba</h3>
          <p>Recortes y estilización experta para tu barba.</p>
        </div>
        <div className="service">
          <img src={barberImage3} alt="Afeitado" />
          <h3>Afeitados</h3>
          <p>Afeitados tradicionales para un look limpio y suave.</p>
        </div>
        
      </div>
      <table className="price-table">
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Corte Clásico</td>
            <td>$200</td>
          </tr>
          <tr>
            <td>Afeitado Tradicional</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>Corte de Barba</td>
            <td>$100</td>
          </tr>
          {/* Añade más filas según sea necesario */}
        </tbody>
      </table>
    </section>
    </>
  );
}

export default Services;
