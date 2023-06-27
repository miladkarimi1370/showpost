import React from "react";
import Template from "./Template";
export default function UnitStates(props) {
  const units =
    props.units &&
    props.units.map((item, index) => {
     return  <Template state={item.state} value={item.value} key={index} />;
    });
  return (
    <>
      <div className="wrapper-of-card-footer d-flex justify-content-around color-of-bg-gold">
        {units}
      </div>
    </>
  );
}
