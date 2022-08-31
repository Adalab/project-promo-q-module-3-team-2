import GetAvatar from "./GetAvatar";

const Fill = (props) => {

  const handleCollapsable = (ev) =>{
    props.handleCollapsable(ev.currentTarget.id);
    props.handleClickCollapsed();
  }

  const handlerInput= (ev) =>{
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    props.handlerInput(inputValue, inputName);
  }

  return (
    <fieldset className="fill">
      <section className="headSection" onClick={handleCollapsable} id="fill">
        <h2 className=" headSection__title">
          <i className="fa fa-keyboard" aria-hidden="true"></i>Rellena
        </h2>
        <i className={`fa-solid fa-angle-down ${props.isOpen? '' : 'rotate'}`}></i>
      </section>
      <div className={`fillInput ${props.isOpen? '' : 'collapsed'}`}>
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
          value={props.dataCard.name}
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
          value={props.dataCard.job}
          onChange={handlerInput}
        />

        <p className="fillInput__label">Imagen de perfil</p>
        <div className="fillInput__profile">
            <GetAvatar avatar={props.avatar}
            updateAvatar={props.updateAvatar} />
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
          value={props.dataCard.email}
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
          value={props.dataCard.phone}
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
          value={props.dataCard.linkedin}
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
          value={props.dataCard.github}
          onChange={handlerInput}
        />
      </div>
    </fieldset>
  );
};
export default Fill;
