import React from "react";
import BodyCard from "./BodyCard";
import UnitStates from "./UnitStates";

export default function Card({ hero }) {
  return (
    <>
      <div className="wrapper-of-card">
        <BodyCard hero={hero} />
        <UnitStates units={hero.units} />
      </div>
    </>
  );
}
