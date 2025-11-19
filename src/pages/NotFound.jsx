import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-container not-found">
      <h1>404</h1>
      <p>Упс! Здається, ви заблукали</p>
      <Link to="/" className="cta-button">На головну</Link>
    </div>
  );
}