import { useParams, Link } from 'react-router-dom';
import { photos } from './Gallery';

export default function PhotoDetails() {
  // Отримуємо ID з URL 
  const { id } = useParams();
  
  // Шукаємо фото в масиві
  const photo = photos.find(p => p.id === parseInt(id));

  if (!photo) {
    return <div className="page-container"><h2>Фото не знайдено 😢</h2></div>;
  }

  return (
    <div className="page-container photo-details">
      <Link to="/gallery" className="back-link">← Назад до галереї</Link>
      <div className="details-card">
        <img src={photo.url} alt={photo.title} />
        <div className="info">
          <h2>{photo.title}</h2>
          <p>ID фотографії: {id}</p>
          <p>*Робимо вигляд детального опису*</p>
        </div>
      </div>
    </div>
  );
}