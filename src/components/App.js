// import previewImg from '../images/img-preview.jpg';
import { useState, useEffect } from "react";
//services
import callToApi from "../services/fetch";
import ls from "../services/localStorage";
//styles
import "../styles/App.scss";
//components
import Header from "./Header";
import Footer from "./Footer";
import CardPreview from "./CardPreview";
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
  const [avatar, setAvatar] = useState("");
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };
  useEffect(() => {
    ls.set("userData", dataCard);
  }, [dataCard]);

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

  const reset = () => {
    updateAvatar();
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
      <Header />
      <main className="mainCard">
        <Card />
      </main>
      <Footer />
    </div>
  );
}

export default App;
