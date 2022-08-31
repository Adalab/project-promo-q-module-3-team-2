import logoAWS from "../images/logo-awesome-profile-cards-copia.png";
import '../styles/Header.scss';
import {Link} from 'react-router-dom';



const  Header = () => {
    return (
        <header className="header">
        <div>
          <Link className="header__container" to="/">
            <img
              title="Volver a Home"
              className="header__container--logoProfile"
              src={logoAWS}
              alt="logo awesome logo-awesome-profile-cards"
            />
          </Link>
        </div>
      </header>
    )
}

export default Header;