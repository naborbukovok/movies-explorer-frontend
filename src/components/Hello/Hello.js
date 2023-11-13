import logo from '../../images/logo.svg';

import "./Hello.css";

function Hello(props) {
  return (
    <div className="hello">
      <a className="hello__link" href="/">
        <img className="hello__logo active-button" src={logo} alt="Логотип" />
      </a>
      <h1 className="hello__title">{ props.title }</h1>
    </div>
  );
}

export default Hello;