import React from "react";

export const Projects = ({ data }) => {
  console.log(data);
  return (
    <div className="projects">
      <div className="mainHeaderProject">
        <h1>{data.subHeaderAbout}</h1>
      </div>
      <div className="projects__card">
      {data.projects.map((info, index) => (
        <div key={index} className="card">
          <div className="containerImg">
            <img src={info.imag} alt={info.heading} />
          </div>

          <div className="portfolio__title">{info.heading}</div>
          <div className="portfolio__box-p">{info.textService}</div>
          <div className="seeMore">
            <a
              href={info.url}
              target="_blank"
              className="portfolio__box-url"
              rel="noreferrer"
            >
              See page / Repository...
            </a>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};
