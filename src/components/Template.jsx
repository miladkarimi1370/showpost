import React from "react";

export default function Template(props) {
  return (
    <>
      <div className="wrapper-of-part pt-4 text-center">
        <h6 className="font-title">{props.state}</h6>
        <p className="font-text color-of-text-blue">{props.value}</p>
      </div>
    </>
  );
}
