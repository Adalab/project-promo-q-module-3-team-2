import "../styles/CardPreview.scss";
import defaultAvatar from '../images/img-preview.jpg'

const CardPreview = (props) => {
  console.log(props);
  const reset = (ev) =>{
    ev.preventDefault();
    props.reset();
  }

   const avatar = props.dataCard.photo === '' ? defaultAvatar : props.dataCard.photo;


    return (
    <section className="preview">
      <button className="preview__reset" onClick={reset} title='Resetear el formulario'>
          <i className="fa-regular fa-trash-can"></i> Reset
        </button>
      <article className={`preview__box palette-${props.dataCard.palette}`}>
        <div className={`preview__container--${props.dataCard.palette}`}>
          <h3 className="preview__name ">
            {props.dataCard.name || `Nombre Apellido`}
          </h3>
          <p className="preview__job ">
            {props.dataCard.job || `Front-end developer`}
          </p>
        </div>
        <div className="preview__photo">
          <img className="photo__profile" src={avatar}></img>
        </div>

        <nav>
          <ul className="preview__socialIcons">
            <li >
              <a
                href={`tel:${props.dataCard.phone}`}
                rel="noreferrer"
                className="preview__icon"
                title={`Teléfono: ${props.dataCard.phone}`}
              >
                <i className="fa-solid fa-mobile-screen-button"></i>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${props.dataCard.email}`}
                rel="noreferrer"
                className="preview__icon"
                title={`Email: ${props.dataCard.email}`}
              >
                <i className="fa-regular fa-envelope"></i>
              </a>
            </li>

            <li>
              <a
                href={props.dataCard.linkedin}
                target="_blank"
                rel="noreferrer"
                className="preview__icon"
                title={`LinkedIn: ${props.dataCard.linkedin}`}
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                href={props.dataCard.github}
                rel="noreferrer"
                target="_blank"
                className="preview__icon"
                title={`Github: ${props.dataCard.github}`}
              >
                <i className="fa-brands fa-github-alt "></i>
              </a>
            </li>
          </ul>
        </nav>
      </article>
    </section>
  );
};

export default CardPreview;