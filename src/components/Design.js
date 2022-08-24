const Design = () => {
  return (
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
              name="palette"
              checked={dataCard.palette === "1"}
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
              name="palette"
              checked={dataCard.palette === "2"}
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
              name="palette"
              checked={dataCard.palette === "3"}
              onChange={handlerInput}
            />
            <div className="color7 sqColor"></div>
            <div className="color8 sqColor"></div>
            <div className="color9 sqColor"></div>
          </label>
        </div>
      </div>
    </fieldset>
  );
};
export default Design;
