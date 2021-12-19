import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <div>
        COPYRIGHT © Nasser Abuchaibe - Portfolio 2021. All rights reserved.
      </div>
      <div className="footer__social">
        <a
          href="https://www.linkedin.com/in/marlonagarciam/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin iconSocial"></i>
        </a>
        <a
          href="https://twitter.com/garciamarlon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter-square iconSocial"></i>
        </a>
        <a
          href="https://github.com/clasesucatmarlon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github iconSocial"></i>
        </a>
      </div>
    </div>
  );
};
