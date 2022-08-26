// import previewImg from '../images/img-preview.jpg';
import { useState, useEffect } from "react";
//services

import ls from "../services/localStorage";
//styles
import "../styles/App.scss";
//components
import Footer from "./Footer";
import Card from "./Card";

function App() {
  const [dataCard, setDataCard] = useState(
    ls.get("userData", {
      palette: "1",
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "../images/img-preview.png",
    })
  );
  const [classCollapsed, setClassCollapsed] = useState("collapsed");
  const [arrowRotated, setArrowRotated] = useState("");
  const [shareLink, setShareLink] = useState("");

  useEffect(() => {
    ls.set("userData", dataCard);
  }, [dataCard]);

  const handlerInput = (inputValue, inputName) => {
    setDataCard({
      ...dataCard,
      [inputName]: inputValue,
    });
  };

  const updateAvatar =(avatar)=>{
    setDataCard({
      ...dataCard,
      photo: avatar
    })
  }
  const handleShare = (link) => {
     setShareLink(link);  
  };

  const handleCollapsable = (data) => {
    const menuClicked = data.id;
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

  const reset = () => {
    setDataCard({
      palette: "1",
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "../images/img-preview.png",
    });
  };

  return (
    <div>
        <Card 
          reset={reset}
          handleCollapsable={handleCollapsable}
          handlerInput={handlerInput} 
          handleShare={handleShare}
          updateAvatar={updateAvatar} 

          dataCard={dataCard}
          shareLink={shareLink}
          arrowRotated={arrowRotated} 
          // classCollapsed={classCollapsed}
          />  
      <Footer />
    </div>
  );
}

export default App;
