import '../styles/Landing.scss';
import {Link} from 'react-router-dom';

function Landing (){

return(
<main className="mainLanding">

  <section className="mainInfo">
    <section className="mainInfo__logoCards">
    </section>

    <section>
      <h1 className="mainInfo__title">Crea tu tarjeta de visita</h1>
      <p className="mainInfo__description">Crea mejores contactos profesionales
        de forma fácil y cómoda</p>
    </section>

    <section className="mainInfo__iconsGroup">
      <div>
        <i className="iconStyle fa fa-object-ungroup fa-2x" aria-hidden="true"></i>
        <p className="iconText">Diseña</p>
      </div>
      <div>
        <i className="iconStyle fa fa-keyboard fa-2x"></i>
        <p className="iconText">Rellena</p>
      </div>
      <div>
        <i className=" iconStyle fa-solid fa-share-nodes fa-2x"></i>
        <p className="iconText">Comparte</p>
      </div>
    </section>
  </section>


  <section className="buttonLanding animate__animated
 animate__heartBeat">
    <Link to= "/createcard" className="buttonLanding__Link"
      alt="Comenzar">Comenzar</Link>
  </section>
</main>)

}

export default Landing;