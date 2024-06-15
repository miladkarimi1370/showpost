import React from "react";

export default function Max({max}) {
  return (
    <>
      <div className="wrapper-of-max mb-2" dir="ltr">
        <span className="red-color-text font-tiny">max = {max}</span>
      </div>
    </>
  );
}
