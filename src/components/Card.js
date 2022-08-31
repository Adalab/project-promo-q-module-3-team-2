import CardPreview from "./CardPreview";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import Header from "./Header";
import { useState } from "react";




const Card = (props) => {

  const [openSection, setOpenSection] = useState('design')

  return (
    <>    
    <Header />
    <main className="mainCard">
    <CardPreview reset={props.reset}
      dataCard={props.dataCard} 
      // avatar={props.dataCard.photo}
      photo={props.dataCard.photo}
      updateAvatar={props.updateAvatar} />

    <form className="form">
      <Design handleCollapsable={props.handleCollapsable} 
      dataCard={props.dataCard} 
      arrowRotated={props.arrowRotated} 
      classCollapsed={props.classCollapsed}
      handlerInput={props.handlerInput}
      isOpen={'design' === openSection}
      handleClickCollapsed={ () => setOpenSection('design')}
      />

      <Fill handleCollapsable={props.handleCollapsable} 
      handlerInput={props.handlerInput}
      updateAvatar={props.updateAvatar} 
      dataCard={props.dataCard} 
      arrowRotated={props.arrowRotated} 
      classCollapsed={props.classCollapsed}
      avatar={props.dataCard.photo}
      isOpen={'fill' === openSection}
      handleClickCollapsed={ () => setOpenSection('fill')}
      />

      <Share handleCollapsable={props.handleCollapsable} 
      dataCard={props.dataCard} 
      arrowRotated={props.arrowRotated} 
      classCollapsed={props.classCollapsed} 
      handleShare={props.handleShare}
      shareLink={props.shareLink} 
      isOpen={'share' === openSection}
      handleClickCollapsed={ () => setOpenSection('share')}
      />

      </form>
      </main>
      
    </>

      // <CardPreview dataCard={dataCard} avatar={avatar} />
  
  );
};

export default Card;
