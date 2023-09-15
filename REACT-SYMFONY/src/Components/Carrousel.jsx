import React from "react";
import { Image } from "@chakra-ui/react";
import javascript from "../img/jScript.png";
import PHP from "../img/PHP.jpg";
import Reacts from "../img/React.png";
import SYMFONY from "../img/SYMFONY.jpg";
import "../Components/Carrousel.css";

function ImagesCarrousel() {
  const size = 150;

  return (
    <div className="carouselContainer">
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={javascript} width={size} height={size} alt="JS" />
        </div>
        <div className="content">
          <div>
            <h2>Javascript</h2>
          </div>
        </div>
      </div>
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={PHP} width={size} height={size} alt="PHP" />
        </div>
        <div className="content">
          <div>
            <h2>PHP</h2>
          </div>
        </div>
      </div>
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={Reacts} width={size} height={size} alt="Reacts" />
        </div>
        <div className="content">
          <div>
            <h2>React</h2>
          </div>
        </div>
      </div>
      <div className="expandableImage">
        <div className="imgBx">
          <Image src={SYMFONY} width={size} height={size} alt="SYMFONY" />
        </div>
        <div className="content">
          <div>
            <h2>SYMFONY</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagesCarrousel;
