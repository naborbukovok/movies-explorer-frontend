import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

import "./Main.css";

function Main() {
  return (
    <div className="main">
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default Main;