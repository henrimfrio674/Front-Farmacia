import { Link } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
  return (
    <nav className="navbar flex gap-6 mb-4">
      <ul className="menu">
        <li className="text-lg font-medium cursor-pointer">
          <Link
            to="/home"
            className="text-white hover:text-red-500 transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li className="text-lg font-medium cursor-pointer">
          <Link
            to="/produtos"
            className="text-white hover:text-red-500 transition-colors duration-300"
          >
            Produtos
          </Link>
        </li>
        <li className="text-lg font-medium cursor-pointer">
          <Link
            to="/categorias"
            className="text-white hover:text-red-500 transition-colors duration-300"
          >
            Categorias
          </Link>
        </li>
      </ul>
    </nav>
  );
}
