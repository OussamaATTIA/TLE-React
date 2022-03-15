import React from "react";
import Flickity from "react-flickity-component";
import Amazon from "./images/amazon.jpg";
import Chronopost from "./images/chronopost.jpg";
import Fedex from "./images/fedex.jpg";


import "flickity/css/flickity.css";


function Carousel() {
  return (
    <Flickity>
      <img style={{ marginLeft: 5, marginRight: 5 }} src={Amazon} alt="Amazon"/>
      <img style={{ marginLeft: 5, marginRight: 5 }} src={Chronopost} alt="Chronopost"/>
      <img style={{ marginLeft: 5, marginRight: 5 }} src={Fedex} alt="Fedex"/>
    </Flickity>
  );
}

export default Carousel