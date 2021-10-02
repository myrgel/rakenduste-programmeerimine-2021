import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <div className="navbar">
      <Link to="/">
        <img className="logo" src="webshio.png" alt=""/>
      </Link>
      <Link to="cart">
        <img className="cart" src="cart.svg" alt=""/>
      </Link>
    </div>
  );
}

// alumine tehke ise

export default Navbar;