import CardPreview from "./CardPreview";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
const Card = () => {
  return (
    <>    <form className="form">  <Design />
      <Fill />
      <Share />
      </form>
      <CardPreview />
    </>

      {/*  <CardPreview dataCard={dataCard} avatar={avatar} /> */}
  
  );
};

export default Card;
