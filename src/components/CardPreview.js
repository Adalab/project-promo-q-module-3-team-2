import "../styles/CardPreview.scss";
import Profile from "./Profile";

const CardPreview = (props) => {
  return (
    <article className={`preview__box palette-${props.dataCard.pallete}`}>
      <h3 className="preview__name ">
        {props.dataCard.name || `Nombre Apellido`}
      </h3>
      <p className="preview__job ">
        {props.dataCard.job || `Front-end developer`}
      </p>
      <div className="preview__photo">
        <div
          className="profile__photo"
          style={{ backgroundImage: `url(${props.avatar})` }}
        ></div>
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
  );
};

export default CardPreview;
