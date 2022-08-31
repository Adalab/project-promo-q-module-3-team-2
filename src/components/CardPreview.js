import "../styles/CardPreview.scss";
import defaultAvatar from '../images/img-preview.jpg'

const CardPreview = (props) => {

  const reset = (ev) =>{
    ev.preventDefault();
    props.reset();
  }

   const avatar = props.photo === '' ? defaultAvatar : props.photo;


    return (
    <section className="preview">
      <article className={`preview__box palette-${props.dataCard.palette}`}>
        <button className="preview__reset " onClick={reset}>
          <i className="fa-regular fa-trash-can"></i> Reset
        </button>
        <h3 className="preview__name ">
          {props.dataCard.name || `Nombre Apellido`}
        </h3>
        <p className="preview__job ">
          {props.dataCard.job || `Front-end developer`}
        </p>
        <div className="preview__photo">
          <img className="photo__profile" src={`${avatar}`}></img>
        </div>

        <nav>
          <ul className="preview__socialIcons">
            <li>
              <a
                href={`tel:${props.dataCard.phone}`}
                rel="noreferrer"
                className="preview__icon"
              >
                <i className="fa-solid fa-mobile-screen-button"></i>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${props.dataCard.email}`}
                rel="noreferrer"
                className="preview__icon"
              >
                <i className="fa-regular fa-envelope"></i>
              </a>
            </li>

            <li>
              <a
                href={props.dataCard.linkedin}
                target="_blank"
                rel="noreferrer"
                className="preview__icon  "
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
              >
                <i className="fa-brands fa-github-alt "></i>
              </a>
            </li>
          </ul>
        </nav>
        <div className="preview__rectangle"></div>
      </article>
    </section>
  );
};

export default CardPreview;