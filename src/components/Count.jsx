import React, { useState, useEffect } from "react";
import Max from "./Max";
export default function Count({ id }) {
  const [count, setCount] = useState(0);
  let [max, setMax] = useState(0);
  useEffect(() => {
    const requests = setInterval(() => {
      fetch(`http://localhost:3000/restricts?hero-id=${id}`)
        .then((response) => response.json())
        .then((restrict) => setMax(restrict[0].max));
    }, 2000);
    return () => clearInterval(requests);
  }, [id]);
  function increment() {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }
  function decrement() {
    setTimeout(() => {
      setCount(count - 1 < 0 ? 0 : (count) => count - 1);
    }, 2000);
  }

  return (
    <>
      <Max max={max} />
      <div className="wrapper-of-counter d-flex justify-content-around">
        <button className="btn btn-dark btn-sm">خرید</button>
        <button
          className="btn blue-bg-color btn-sm text-white"
          onClick={increment}
        >
          +
        </button>
        <span className="font-title">{count}</span>
        <button
          className="btn red-bg-color btn-sm text-white"
          onClick={decrement}
        >
          _
        </button>
      </div>
    </>
  );
}
