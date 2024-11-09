import React, { useState, useEffect } from 'react';
import './game.css';

export function Game() {
  const [numToConvert, setNumToConvert] = useState(generateRandomNumber());
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [userAnswer, setUserAnswer] = useState('');
  const [bestScore, setBestScore] = useState(localStorage.getItem('bestScore') || 0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [fact, setFact] = useState("Fact Incoming");

  useEffect(() => {
    let timer;
    if (isGameStarted) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isGameStarted]);

  useEffect(() => {
    if (timeLeft === 0 && isGameStarted) {
      if (score > bestScore) {
        setBestScore(score);
        localStorage.setItem('bestScore', score);
      }
      setIsGameStarted(false);
      setFact('Seatbelts save lives. Buckle up every time');
    }
  }, [timeLeft, score, bestScore, isGameStarted]);

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(userAnswer, 2) === numToConvert) {
      setScore(score + 1);
      setTimeLeft(timeLeft + 10);
      setNumToConvert(generateRandomNumber());
      setUserAnswer('');
    }
  };

  const startGame = () => {
    setIsGameStarted(true);
    setScore(0);
    setTimeLeft(60);
    setNumToConvert(generateRandomNumber());
    setUserAnswer('');
    setFact("Fact Incoming");
  };

  return (
    <main className="container my-5 text-center flex-grow-1">
      <div className="corner-box position-absolute top start-0 p-3">
        <div className="users">
          User:
          <span className="user-name">Temporary Name</span>
        </div>
        <ul className="notifying mt-3">
          <li className="user-name">Baymax scored 6</li>
          <li className="user-name">Hiro scored 8</li>
        </ul>
      </div>
      <br />
      <div className="game mt-4">
        <div className="game-box">
          <div className="num-data-container">
            <div className="num-to-convert-box">
              {isGameStarted && (
                <span id="num_to_convert" className="num-text">{numToConvert}</span>
              )}
            </div>
            <div className="mid-game-data">
              <ul className="list-unstyled">
                <li>
                  Score: <span id="game-score">{score}</span>
                </li>
                <li>
                  Time left: <span className="countdown">{Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</span>
                </li>
                <li>
                  Best Score: <span id="best-score">{bestScore}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <form className="game-input" onSubmit={handleSubmit}>
          <input
            type="text"
            id="user-answer"
            pattern="^[01]{1,8}$"
            title="0 or 1 only"
            placeholder="00000000"
            className="input-answer"
            value={userAnswer}
            onChange={handleInputChange}
          />
        </form>
      </div>
      <div>
        <span>128 64 32 16 8 4 2 1</span>
        <br />
        <button className="btn btn-outline-success mt-3" onClick={startGame}>Play</button>
      </div>
      <br />
      <div className="fact_box mt-4 border-top border-success">
        <span className="fact">{fact}</span>
      </div>
    </main>
  );

  function generateRandomNumber() {
    return Math.floor(Math.random() * 256);
  }
}

