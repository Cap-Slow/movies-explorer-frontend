import { useNavigate } from 'react-router-dom';

function NotFoundPage({ isLoggedIn }) {
  const navigate = useNavigate();

  function handleGoBack() {
    if (isLoggedIn) {
      navigate(-2);
    } else {
      navigate(-1);
    }
  }

  return (
    <div className="not-found-page">
      <h2 className="not-found-page__title">404</h2>
      <p className="not-found-page__text">Страница не найдена</p>
      <button onClick={handleGoBack} className="not-found-page__back-button">
        Назад
      </button>
    </div>
  );
}

export default NotFoundPage;
