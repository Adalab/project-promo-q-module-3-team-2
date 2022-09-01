import callToApi from "../services/fetch";
import '../styles/Share.scss'
import { useState } from "react";

const Share = (props) => {

  const [msgIsShown, setMsgIsShown] = useState('collapsed');

  const handleCollapsable = (ev) =>{
    props.handleCollapsable(ev.currentTarget.id);
    props.handleClickCollapsed();
  }

  const validateForm=()=>{
    if (!props.shareLink.success) {
      setMsgIsShown('')
    }
  }  

  const renderErrorMsg=()=>{
    if(props.shareLink.success){
      return (<>
        <a className='card__herokulink' href={props.shareLink.cardURL}>{props.shareLink.cardURL}</a>
        <div className="card__twitter">
          <i className="fa-brands fa-twitter card__twitter--icon"></i>
          <a
            className="card__twitter--link"
            href={`https://twitter.com/intent/tweet?text=He%20creado%20mi%20mi%20tarjeta%20con%20Awesome%20Profile&url=${props.shareLink.cardURL}`}
            target="_blank"
            rel="noreferrer"
            title="Comparte la tarjeta creada en Twitter"
          >
            Compartir en twitter
          </a>
        </div>
        </>)
    } else{ return (
      <p className={`card__text ${msgIsShown}`}> Debes rellenar todos los campos obligatorios</p>)
    }
    
  }

  const handleShare=(ev)=>{
    ev.preventDefault();
    validateForm();
    renderErrorMsg();
    
    callToApi(props.dataCard).then((link) => {
      props.handleShare(link);
    }); 
  }

  return (
    <fieldset className="share">
      <section className="headSection" onClick={handleCollapsable} id="share">
        <h2 className=" headSection__title">
          <i className="fa fa-share-nodes" aria-hidden="true"></i>Comparte
        </h2>
        <i className={`fa-solid fa-angle-down ${props.isOpen? '' : 'rotate'}`}></i>
      </section>
      <section className={`${props.isOpen? '' : 'collapsed'} share__container`}>
        <button className={`share__button`} onClick={handleShare} title='Crea la tarjeta con los datos que has introducido'>
          <i className="fa-regular fa-address-card share__button--icon"></i>
          Crear tarjeta
        </button>
          {renderErrorMsg()}         
      </section>
    </fieldset>
  );
};
export default Share;