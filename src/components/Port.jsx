import React from "react";
import { introText } from "../data";
import about from "../assets/img/train.svg";

const Port = () => {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h2 className="intro__title">{introText.title}</h2>
      </div>
      <div className="intro__text">
        <div className="text">
          <div>{introText.desc[0]}</div>
          <div>{introText.desc[1]}</div>
          <div>{introText.desc[2]}</div>
        </div>
        <div className="img">
          <img src={about} alt="어바웃미" />
        </div>
      </div>
    </section>
  );
};

export default Port;
