
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Black and White Modern Illustrative Barbershop Logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        {<img src={logo} alt="" width= '80px' 
  height='Auto'/>}
      </div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/services" className="nav-link">Services</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
