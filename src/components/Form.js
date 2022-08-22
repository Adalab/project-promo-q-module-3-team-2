/* const Form = () => {

    const handlerInput = (ev) => {
        const inputValue = ev.target.value;
        const inputName = ev.target.name;
    
        setDataCard({
          ...dataCard,
          [inputName]: inputValue,
        });
      };
    
      const handleShare = (ev) => {
        ev.preventDefault();
        callToApi(dataCard).then((response) => {
          setShareLink(response);
          console.log("respuesta", response);
        });
      };
      const handleCollapsable = (ev) => {
        const menuClicked = ev.currentTarget.id;
        descolapsar(menuClicked);
        rotate(menuClicked);
        console.log(menuClicked);
      };
    
      const rotate = (id) => {
        arrowRotated === "" ? setArrowRotated("rotate") : setArrowRotated("");
      };
      function descolapsar(id) {
        classCollapsed === "collapsed"
          ? setClassCollapsed("")
          : setClassCollapsed("collapsed");
      }

    return ( <form className="form">
    <fieldset className="desing">
      <section
        className="headSection  design"
        onClick={handleCollapsable}
        id="design"
      >
        <h2 className=" headSection__title">
          <i className="fa fa-object-ungroup" aria-hidden="true"></i>
          Diseña
        </h2>
        <i className={`fa-solid fa-angle-down ${arrowRotated}`}></i>
      </section>
      <div className={`desing__div ${classCollapsed}`}>
        <h3 className="desing__div--title3">Colores</h3>
        <div className="desing__div--colors">
          <label className="familyColor1" htmlFor="familyColor1">
            <input
              id="familyColor1 "
              type="radio"
              value="1"
              name="pallete"
              checked={dataCard.pallete === "1"}
              onChange={handlerInput}
            />
            <div className="color1 sqColor"></div>
            <div className="color2 sqColor"></div>
            <div className="color3 sqColor"></div>
          </label>
          <label className="familyColor2" htmlFor="familyColor2">
            <input
              id="familyColor2"
              type="radio"
              value="2"
              name="pallete"
              checked={dataCard.pallete === "2"}
              onChange={handlerInput}
            />
            <div className="color4 sqColor"></div>
            <div className="color5 sqColor"></div>
            <div className="color6 sqColor"></div>
          </label>
          <label className="familyColor3" htmlFor="familyColor3">
            <input
              id="familyColor3"
              type="radio"
              value="3"
              name="pallete"
              checked={dataCard.pallete === "3"}
              onChange={handlerInput}
            />
            <div className="color7 sqColor"></div>
            <div className="color8 sqColor"></div>
            <div className="color9 sqColor"></div>
          </label>
        </div>
      </div>
    </fieldset>
    <fieldset className="fill">
      <section
        className="headSection"
        onClick={handleCollapsable}
        id="fill"
      >
        <h2 className=" headSection__title">
          <i className="fa fa-keyboard" aria-hidden="true"></i>Rellena
        </h2>
        <i className={`fa-solid fa-angle-down ${arrowRotated}`}></i>
      </section>
      <div className={`fillInput  ${classCollapsed}`}>
        <label className="fillInput__label" htmlFor="fullName">
          Nombre completo
        </label>
        <input
          className="fillInput__input "
          type="text"
          id="fullName"
          name="name"
          placeholder="Ej : Anakin Skywalker"
          required=""
          value={dataCard.name}
          onChange={handlerInput}
        />

        <label className="fillInput__label" htmlFor="job">
          Puesto
        </label>
        <input
          className="fillInput__input "
          type="text"
          id="job"
          name="job"
          placeholder="Ej : Jedi Knight"
          required=""
          value={dataCard.job}
          onChange={handlerInput}
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
            className="action__hiddenField"
          />

          <div></div>
        </div>

        <label className="fillInput__label" htmlFor="Email">
          Email
        </label>
        <input
          className="fillInput__input"
          type="mail"
          id="Email"
          name="email"
          placeholder="Ej : skyguy@gmail.com"
          required=""
          pattern="[a-zA-Z0-9!#$%&amp;'*_+-]([\.]?[a-zA-Z0-9!#$%&amp;'*_+-])+@[a-zA-Z0-9]([^@&amp;%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?"
          value={dataCard.email}
          onChange={handlerInput}
        />

        <label className="fillInput__label" htmlFor="tel">
          Teléfono
        </label>
        <input
          className="fillInput__input"
          type="tel"
          id="tel"
          name="phone"
          placeholder="Ej : 555-55-55-55"
          required=""
          maxLength="9"
          value={dataCard.phone}
          onChange={handlerInput}
        />
        <label className="fillInput__label" htmlFor="linkedin">
          Linkedin
        </label>
        <input
          className="fillInput__input "
          type="url"
          id="linkedin"
          name="linkedin"
          placeholder="Ej : @linkedin"
          required=""
          value={dataCard.linkedin}
          onChange={handlerInput}
        />

        <label className="fillInput__label" htmlFor="github">
          Github
        </label>
        <input
          className="fillInput__input"
          type="url"
          id="github"
          name="github"
          placeholder="Ej : @sky.guy"
          required=""
          value={dataCard.github}
          onChange={handlerInput}
        />
      </div>
    </fieldset>
    <fieldset className="share">
      <section
        className="headSection"
        onClick={handleCollapsable}
        id="share"
      >
        <h2 className=" headSection__title">
          <i className="fa fa-share-nodes" aria-hidden="true"></i>Comparte
        </h2>
        <i className={`fa-solid fa-angle-down ${arrowRotated}`}></i>
      </section>
      <section className={`${classCollapsed}`}>
        <button className="share__button" onClick={handleShare}>
          <i className="fa-regular fa-address-card share__button--icon"></i>
          Crear tarjeta
        </button>

        <div className="card ">
          <p className="card__text"></p>
          <a
            href={
              shareLink.success === true
                ? shareLink.cardURL
                : shareLink.error
            }
            className="card__link "
            target="_blank"
            rel="noreferrer"
          >
            {shareLink}
          </a>

          <div className="card__twitter">
            <i className="fa-brands fa-twitter card__twitter--icon"></i>

            <a
              className="card__twitter--link"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              Compartir en twitter
            </a>
          </div>
        </div>
      </section>
    </fieldset>
  </form>

    )
}

export default Form;  */