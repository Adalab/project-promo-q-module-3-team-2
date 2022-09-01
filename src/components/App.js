import defaultAvatar from '../images/img-preview.jpg';
import { useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom';
// import {Link} from 'react-router-dom';
//services

import ls from "../services/localStorage";
//styles
import "../styles/App.scss";
//components
import Footer from "./Footer";
import Card from "./Card";
import Landing from "./Landing";

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
      photo: "../images/img-preview.jpg",
    })
  );
  const [classCollapsed, setClassCollapsed] = useState("collapsed");
  const [isOpen, setIsOpen] = useState('design');
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
      photo: avatar,
    })
  }
  const handleShare = (link) => {
     setShareLink(link);  
  };

  const handleCollapsable = (data) => {
    const menuClicked = data;
    descolapsar(menuClicked);
    rotate(menuClicked);
    console.log(menuClicked);
    //setIsCollapsed(menuClicked);
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
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/createcard" element={<Card 
          reset={reset}
          handleCollapsable={handleCollapsable}
          handlerInput={handlerInput} 
          handleShare={handleShare}
          updateAvatar={updateAvatar}
          classCollapsed={classCollapsed} 
          isOpen={isOpen}
          dataCard={dataCard}
          shareLink={shareLink}
          arrowRotated={arrowRotated} 
          />  }/>
      </Routes>
        
      <Footer />
    </div>
    );
  }

export default App;
