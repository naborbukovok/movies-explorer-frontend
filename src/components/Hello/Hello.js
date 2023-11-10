import logo from '../../images/logo.svg';

import "./Hello.css";

function Hello(props) {
  return (
    <div className="hello">
      <img className="hello__logo" src={logo} alt="Логотип" />
      <h1 className="hello__title">{ props.title }</h1>
    </div>
  );
}

export default Hello;