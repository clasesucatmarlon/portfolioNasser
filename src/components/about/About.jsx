import React from "react";
import Picture from "../../assets/images/picture.jpeg";

export const About = ({ data }) => {
  return (
    <div className="about" id="about">
      <div className="mainHeader">
        <h1>{data.subHeaderAbout}</h1>
      </div>
      <div className="about__content">
        <div className="col-8">
            <p className="mainContent">{data.mainContentAbout}</p>
        </div>


        <div className="About__image">
          <img src={Picture} alt="{header.mainContent}" />
        </div>

      </div>
    </div>
  );
};
