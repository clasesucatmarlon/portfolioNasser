import React from "react";
import Data from "../../data/data";

export const Header = ({ data }) => {
  return (
    <div>
      <div className="header">
        <div className="header__social">
          <a
            href="https://www.linkedin.com/in/marlonagarciam/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/garciamarlon"
            target="_blank"
            rel="noreferrer"
          ><i className="fab fa-twitter-square"></i></a>
          <a
            href="https://github.com/clasesucatmarlon"
            target="_blank"
            rel="noreferrer"
          ><i className="fab fa-github"></i></a>
        </div>
        <h1>{data.title}</h1>
        <p className="text__title">{data.text}</p>
        <p className="text__skill">{data.skill}</p>
      </div>
    </div>
  );
};
