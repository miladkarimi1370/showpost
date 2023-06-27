import React from "react";

export default function BodyCard(props) {
  return (
    <>
      <div className="card" style={{ width: 18 + "rem" }}>
        <img
          src={props.hero.img}
          className="card-img-top"
          alt={props.hero.title}
        />
        <div className="card-body">
          <h6 className="text-center font-tiny color-of-text-gold">
            سطح : {props.hero.level}
          </h6>
          <h5 className="card-title font-title text-center">
            {props.hero.title}
          </h5>
          <p className="card-text font-text text-muted text-justify">
            {props.hero.description}
          </p>
        </div>
      </div>
    </>
  );
}
