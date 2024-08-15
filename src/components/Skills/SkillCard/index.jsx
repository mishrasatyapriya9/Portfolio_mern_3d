import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import "./SkillCard.css"
import { SiAdobexd } from "react-icons/si";

const SkillCard = ({
    title,
    data
}) => {
  return (
    <div className="skill__card">
      <h3>{title}</h3>
      <div className="skill__content">
        {data.map((list, index) => (
          <article className="skill__details" key={index}>
            {/* <BsPatchCheckFill className="skill__icon" /> */}
            <span className="skill__icon">{list.logo}</span>
            <div>
              <h2 className="skill__name">{list.skill}</h2>
              <small className="text__muted skill__level">{list.level}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default SkillCard
