const Share = () => {
  return (
    <fieldset className="share">
      <section className="headSection" onClick={handleCollapsable} id="share">
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
          <a href="." className="card__link " target="_blank" rel="noreferrer">
            {shareLink.success === true ? shareLink.cardURL : shareLink.error}
          </a>

          <div className="card__twitter">
            <i className="fa-brands fa-twitter card__twitter--icon"></i>{" "}
            <a
              className="card__twitter--link"
              href={`https://twitter.com/intent/tweet?text=He%20creado%20mi%20mi%20tarjeta%20con%20Awsome%20Profile&url=${shareLink.cardURL}`}
              target="_blank"
              rel="noreferrer"
            >
              Compartir en twitter
            </a>
          </div>
        </div>
      </section>
    </fieldset>
  );
};
export default Share;
