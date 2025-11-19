import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import PhotoDetails from './pages/PhotoDetails';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      
      <main className="content">
        {/* Анімацію переходів можна додати пізніше */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* Динамічний маршрут: :id означає змінну частину */}
          <Route path="/gallery/:id" element={<PhotoDetails />} />
          <Route path="/contact" element={<Contact />} />
          {/* Маршрут-пастка для всіх невідомих URL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <footer>
        <p>&copy; 2025 Photographer Portfolio. Lab 7.</p>
      </footer>
    </div>
  );
}

export default App;