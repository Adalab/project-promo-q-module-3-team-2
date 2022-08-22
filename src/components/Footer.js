import logoAdalab from "../images/logo-adalab.png";
import '../styles/Footer.scss'

const Footer = () => {
    return (<footer className="footer">
    <span className="footerCopy">Bichatrónicas ©2022</span>
    <div>
      <img className="footerImage" src={logoAdalab} alt="logo adalab" />
    </div>
  </footer>
    )
}

export default Footer;