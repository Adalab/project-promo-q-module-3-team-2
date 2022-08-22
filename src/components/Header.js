import logoAWS from "../images/logo-awesome-profile-cards-copia.png";
import '../styles/Header.scss'


const  Header = () => {
    return (
        <header className="header">
        <div className="header__container">
          <img
            className="header__container--logoProfile"
            src={logoAWS}
            alt="logo awespne logo-awesome-profile-cards"
          />
        </div>
      </header>
    )
}

export default Header;