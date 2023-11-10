import "./NotFound.css";

function NotFound() {
  function handleTurnBack() {
    window.history.back();
  };

  return (
    <section className="not-found">
      <h1 className="not-found__status">404</h1>
      <p className="not-found__description">Страница не найдена</p>
      <button type="button" onClick={handleTurnBack} className="not-found_button active-link">Назад</button>
    </section>
  );
}

export default NotFound;