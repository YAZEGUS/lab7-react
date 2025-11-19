import { Link } from 'react-router-dom';

// Дані для галереї
export const photos = [
  { id: 1, title: 'Гірський туман', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80' },
  { id: 2, title: 'Міські вогні', url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=500&q=80' },
  { id: 3, title: 'Портрет душі', url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=500&q=80' },
  { id: 4, title: 'Океанська хвиля', url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=500&q=80' },
];

export default function Gallery() {
  return (
    <div className="page-container">
      <h2>Мої роботи</h2>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="gallery-item">
            <img src={photo.url} alt={photo.title} />
            <div className="gallery-overlay">
              <h3>{photo.title}</h3>
              <Link to={`/gallery/${photo.id}`} className="details-link">Детальніше</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}