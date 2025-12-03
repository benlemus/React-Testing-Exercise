import React, { useState } from "react";
import "./CoinFlip.css";
import Counter from "./Counter";

import heads from "./heads.jpg";
import tails from "./tails.jpg";

const faces = [heads, tails];

const CoinFlip = () => {
  const [coinFace, setCoinFace] = useState(null);
  const [counter, setCounter] = useState(0);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);

  const handleClick = () => {
    const randIndx = Math.floor(Math.random() * faces.length);

    const newFace = faces[randIndx];

    setCoinFace(newFace);
    setCounter(counter + 1);
    randIndx === 0 ? setHeads(heads + 1) : setTails(tails + 1);
  };

  return (
    <div className="coin-flip-container">
      <img src={coinFace} alt="" className={coinFace || "genericCoin"}></img>
      <div className="btn-container">
        <button onClick={handleClick}> Flip Coin!</button>
      </div>
      <Counter counter={counter} heads={heads} tails={tails} />
    </div>
  );
};

export default CoinFlip;
