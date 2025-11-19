import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar">
      <div className="logo">📸 PhotoFolio</div>
      <div className="nav-links">
        <Link to="/" className={isActive('/')}>Головна</Link>
        <Link to="/gallery" className={isActive('/gallery')}>Галерея</Link>
        <Link to="/contact" className={isActive('/contact')}>Зв’язок</Link>
      </div>
    </nav>
  );
}