import { Navbar } from '../navbar/Navbar';
import farmaciaLogo from '../../assets/logo.jpg';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-red-200 to-yellow-500 text-white p-4">
      <div className="max-w-7xl flex items-center justify-between p-4 mx-auto">
        <img className="w-20 object-cover rounded-full shadow-md" src={farmaciaLogo} alt="Farmácia Logo" />
        <Navbar />
      </div>
    </header>
  );
}
