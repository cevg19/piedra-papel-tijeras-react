import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaEquals,
  FaHandRock,
  FaHandScissors,
  FaHandPaper,
  FaSyncAlt,
} from "react-icons/fa";

import { AiFillCloseCircle } from "react-icons/ai";

function GameScreen() {
  const [option, setOption] = useState(null);
  const [optionRandom, setOptionRamdom] = useState(null);
  const [message, setMessage] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  const [winCount, setWinCount] = useState(0);
  const [loseCount, setLoseCount] = useState(0);

  const options = ["Piedra", "Papel", "Tijeras"];
  const icons = {
    Empate: <FaEquals className="equals" />,
    Ganaste: <FaCheckCircle className=" win" />,
    Perdiste: <AiFillCloseCircle className="lose" />,
  };

  const winOptions = {
    Piedra: "Tijeras",
    Papel: "Piedra",
    Tijeras: "Papel",
  };
  function playAgain() {
    setOption(null);
    setOptionRamdom(null);
    setMessage(null);
    setDisableButton(false);
  }
  function resetScore() {
    setWinCount(0);
    setLoseCount(0);
  }

  function playGame() {
    setDisableButton(true);
    let random = Math.floor(Math.random() * options.length);
    setOptionRamdom(options[random]);

    if (option == options[random]) {
      setMessage("Empate");
    } else {
      if (winOptions[option] == options[random]) {
        setMessage("Ganaste");
        setWinCount(winCount + 1);
      } else {
        setMessage("Perdiste");
        setLoseCount(loseCount + 1);
      }
    }
  }

  return (
    <>
      <div className="result">
        <h1>PIEDRA PAPEL O TIJERAS</h1>

        <div className="scoreboard">
          <div className="title">SCOREBOARD</div>
          <div className="score">
            {winCount}:{loseCount}
          </div>

          <button onClick={resetScore}>
            <FaSyncAlt />
          </button>
        </div>
        <div className="display-game">
          {message}
          <div className="choice">
            {option} - {optionRandom}
          </div>
          <div className="icon">{icons[message]}</div>
        </div>
      </div>
      <div className="options">
        <button
          className="btn-game"
          type="button"
          value="Piedra"
          onClick={() => setOption("Piedra")}
          disabled={disableButton}
        >
          <FaHandRock />
        </button>
        <button
          className="btn-game"
          type="button"
          value="Papel"
          onClick={() => setOption("Papel")}
          disabled={disableButton}
        >
          <FaHandPaper />
        </button>

        <button
          className="btn-game"
          type="button"
          value="Tijeras"
          onClick={() => setOption("Tijeras")}
          disabled={disableButton}
        >
          <FaHandScissors />
        </button>
      </div>
      <div className="play">
        {disableButton ? (
          <button onClick={playAgain}>Jugar de Nuevo</button>
        ) : (
          <button className="btn-game" onClick={playGame}>
            Jugar
          </button>
        )}
      </div>
    </>
  );
}

export default GameScreen;
