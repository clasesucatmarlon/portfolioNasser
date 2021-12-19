import React from "react";

export const Skill = ({ data }) => {
  console.log("sfsdsdf", data.skills);
  return (
    <div className="skill">
      <div className="mainHeaderSkill">
        <h1>My Skills</h1>
      </div>

      <div className="skillBanner">
        {data.skills.map((skill, index) => (
          <img key={index} src={skill.url} alt={skill.name} />
        ))}
      </div>
    </div>
  );
};
