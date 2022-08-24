import CardPreview from "./CardPreview";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import Header from "./Header";
const Card = (props) => {
  return (
    <>    
    <Header />
    <form className="form">
      <Design handleCollapsable={props.handleCollapsable} 
      dataCard={props.dataCard} 
      arrowRotated={props.arrowRotated} 
      classCollapsed={props.classCollapsed}/>

      <Fill handleCollapsable={props.handleCollapsable} 
      dataCard={props.dataCard} 
      arrowRotated={props.arrowRotated} 
      classCollapsed={props.classCollapsed}
      updateAvatar={props.updateAvatar}
      avatar={props.avatar} />

      <Share handleCollapsable={props.handleCollapsable} 
      dataCard={props.dataCard} 
      arrowRotated={props.arrowRotated} 
      classCollapsed={props.classCollapsed} 
      handleShare={props.handleShare}
      shareLink={props.shareLink} />

      </form>
      <CardPreview reset={props.reset}
       updateAvatar={props.updateAvatar}/>
    </>

      // <CardPreview dataCard={dataCard} avatar={avatar} />
  
  );
};

export default Card;
