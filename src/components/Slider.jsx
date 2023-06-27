import React, { useState, useEffect } from "react";
import { Audio } from "react-loader-spinner";
import Arrow from "./Arrow";
import Card from "./Card";

export default function Slider() {
  const [heroes, setHero] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/heroes")
      .then((response) => {
        return response.json();
      })
      .then((heroes) => {
        setHero(heroes);
      });
  }, []);
  function handleNext() {
    setCurrentIndex(currentIndex + 1 < heroes.length ? currentIndex + 1 : 0);
  }
  function handlePrev() {
    setCurrentIndex(
      currentIndex - 1 < 0 ? heroes.length - 1 : currentIndex - 1
    );
  }
  return (
    <>
      {!heroes.length ? (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="white"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      ) : (
        <div className="wrapper-of-slider d-flex align-items-center">
          <Arrow direction={"right"} handleClick={handleNext} />
          <Card hero={heroes[currentIndex]} />
          <Arrow direction={"left"} handleClick={handlePrev} />
        </div>
      )}
    </>
  );
}
