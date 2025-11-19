import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-container home-page">
      <h1>Вітаю у світі візуального мистецтва</h1>
      <p>Мене звати Алекс, і я ловлю моменти, які неможливо повторити.</p>
      <Link to="/gallery" className="cta-button">Переглянути роботи</Link>
    </div>
  );
}