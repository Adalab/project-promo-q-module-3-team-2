// import previewImg from '../images/img-preview.jpg';
import logoAdalab from "../images/logo-adalab.png";
import logoAWS from "../images/logo-awesome-profile-cards-copia.png";
import "../styles/App.scss";
import { useState } from "react";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

function App() {
  const [classCollapsed, setClassCollapsed] = useState("collapsed");
  const handleCollapsable = (ev) => {
    const menuClicked = ev.currentTarget.id;
    descolapsar(menuClicked);
    console.log(menuClicked);
  };

  function descolapsar(id) {
    classCollapsed === "collapsed"
      ? setClassCollapsed("")
      : setClassCollapsed("collapsed");
  }

  /* 
const [collapsable, setCollapsable] = useState(true);


const handleCollapsable = (ev) => {

  
  
  
  setCollapsable(!collapsable);

 
  
}; */
  return (
    <div>
      <header className="header">
        <div className="header__container">
          <img
            className="header__container--logoProfile"
            src={logoAWS}
            alt="logo awespne logo-awesome-profile-cards"
          />
        </div>
      </header>
      <main className="mainCard">
        <section className="preview">
          <button className="preview__reset js_btnReset">
            <i className="fa-regular fa-trash-can"></i> Reset
          </button>

          <article className="preview__box js_previewBox palette-1">
            <h3 className="preview__name js_previewName">Nombre apellido</h3>
            <p className="preview__job js_previewJob">Front-end developer</p>
            <div className="preview__photo js__profile-image"></div>

            <nav>
              <ul className="preview__socialIcons">
                <li>
                  <a
                    href=""
                    target="_blank"
                    className="preview__icon js_previewPhone js_preview_icon"
                  >
                    <i className="fa-solid fa-mobile-screen-button js_icons"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                    className="preview__icon js_previewEmail js_preview_icon"
                  >
                    <i className="fa-regular fa-envelope js_icons"></i>
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    target="_blank"
                    className="preview__icon js_previewLinkedin js_preview_icon"
                  >
                    <i className="fa-brands fa-linkedin-in js_icons"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                    className="preview__icon js_previewGithub js_preview_icon"
                  >
                    <i className="fa-brands fa-github-alt js_icons"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="preview__rectangle js_preview__rectangle"></div>
          </article>
        </section>

        <form className="form">
          <fieldset className="desing">
            <section
              className="headSection js_designTitle"
              onClick={handleCollapsable}
              id="design"
            >
              <h2 className=" headSection__title">
                <i className="fa fa-object-ungroup" aria-hidden="true"></i>
                Diseña
              </h2>
              <i className="fa-solid fa-angle-down js_iconDesign rotate"></i>
            </section>
            <div className={`desing__div js_divDesign ${classCollapsed}`}>
              <h3 className="desing__div--title3">Colores</h3>
              <div className="desing__div--colors">
                <label className="familyColor1" htmlFor="familyColor1">
                  <input
                    className="js_inputRadio js_inputRadio1"
                    id="familyColor1 "
                    type="radio"
                    value="1"
                    name="color"
                  />
                  <div className="color1 sqColor"></div>
                  <div className="color2 sqColor"></div>
                  <div className="color3 sqColor"></div>
                </label>
                <label className="familyColor2" htmlFor="familyColor2">
                  <input
                    className="js_inputRadio js_inputRadio2"
                    id="familyColor2"
                    type="radio"
                    value="2"
                    name="color"
                  />
                  <div className="color4 sqColor"></div>
                  <div className="color5 sqColor"></div>
                  <div className="color6 sqColor"></div>
                </label>
                <label className="familyColor3" htmlFor="familyColor3">
                  <input
                    className="js_inputRadio js_inputRadio3"
                    id="familyColor3"
                    type="radio"
                    value="3"
                    name="color"
                  />
                  <div className="color7 sqColor"></div>
                  <div className="color8 sqColor"></div>
                  <div className="color9 sqColor"></div>
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset className="fill js_allInputs">
            <section
              className="headSection js_fillTitle"
              onClick={handleCollapsable}
              id="fill"
            >
              <h2 className=" headSection__title">
                <i className="fa fa-keyboard" aria-hidden="true"></i>Rellena
              </h2>
              <i className="fa-solid fa-angle-down js_iconFill"></i>
            </section>
            <div className={`fillInput js_divFill fill ${classCollapsed}`}>
              <label className="fillInput__label" htmlFor="fullName">
                Nombre completo
              </label>
              <input
                className="fillInput__input js_inputName"
                type="text"
                id="fullName"
                name="name"
                placeholder="Ej : Anakin Skywalker"
                required=""
              />

              <label className="fillInput__label" htmlFor="job">
                Puesto
              </label>
              <input
                className="fillInput__input js_inputJob"
                type="text"
                id="job"
                name="job"
                placeholder="Ej : Jedi Knight"
                required=""
              />

              <p className="fillInput__label">Imagen de perfil</p>
              <div className="fillInput__profile">
                <label className="action__upload-btn" htmlFor="img-selector">
                  Añadir imagen
                </label>
                <input
                  type="file"
                  name="photo"
                  id="img-selector"
                  className="action__hiddenField js__profile-upload-btn"
                />

                <div className="profile__preview js__profile-preview"></div>
              </div>

              <label className="fillInput__label" htmlFor="Email">
                Email
              </label>
              <input
                className="fillInput__input js_inputEmail"
                type="mail"
                id="Email"
                name="email"
                placeholder="Ej : skyguy@gmail.com"
                required=""
                pattern="[a-zA-Z0-9!#$%&amp;'*_+-]([\.]?[a-zA-Z0-9!#$%&amp;'*_+-])+@[a-zA-Z0-9]([^@&amp;%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?"
              />

              <label className="fillInput__label" htmlFor="tel">
                Teléfono
              </label>
              <input
                className="fillInput__input js_inputPhone"
                type="tel"
                id="tel"
                name="phone"
                placeholder="Ej : 555-55-55-55"
                required=""
                maxlength="9"
              />
              <label className="fillInput__label" htmlFor="linkedin">
                Linkedin
              </label>
              <input
                className="fillInput__input js_inputLinkedin"
                type="url"
                id="linkedin"
                name="linkedin"
                placeholder="Ej : @linkedin"
                required=""
              />

              <label className="fillInput__label" htmlFor="github">
                Github
              </label>
              <input
                className="fillInput__input js_inputGithub"
                type="url"
                id="github"
                name="github"
                placeholder="Ej : @sky.guy"
                required=""
              />
            </div>
          </fieldset>
          <fieldset className="share">
            <section
              className="headSection js_fillTitle"
              onClick={handleCollapsable}
              id="share"
            >
              <h2 className=" headSection__title">
                <i className="fa fa-share-nodes" aria-hidden="true"></i>Comparte
              </h2>
              <i className="fa-solid fa-angle-down js_iconShare"></i>
            </section>
            <section className={`js_divShare collapsed ${classCollapsed}`}>
              <button className="share__button js_shareButton">
                <i className="fa-regular fa-address-card share__button--icon"></i>
                Crear tarjeta
              </button>

              <div className="card js_cardShare collapsed">
                <p className="card__text js_msj"></p>
                <a href="" className="card__link js_url" target="_blank">
                  {" "}
                </a>

                <div className="card__twitter">
                  <i className="fa-brands fa-twitter card__twitter--icon"></i>

                  <a
                    className="card__twitter--link js_shareTwitter"
                    href=""
                    target="_blank"
                  >
                    Compartir en twitter
                  </a>
                </div>
              </div>
            </section>
          </fieldset>
        </form>
      </main>

      <footer className="footer">
        <span className="footerCopy">Bichatrónicas ©2022</span>
        <div>
          <img className="footerImage" src={logoAdalab} alt="logo adalab" />
        </div>
      </footer>
    </div>
  );
}

export default App;
