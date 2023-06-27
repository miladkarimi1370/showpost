import React from "react";

export default function Arrow({ direction, handleClick }) {
  return (
    <>
      <div className="wrapper-of-arrow" onClick={handleClick}>
        <i
          className={`fa-solid fa-circle-chevron-${direction} fa-2xl text-white p-5`}
        ></i>
      </div>
    </>
  );
}
