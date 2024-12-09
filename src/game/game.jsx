import React, { useState, useEffect } from 'react';
import './game.css';

export function Game({ userName }) {
  const [numToConvert, setNumToConvert] = useState(generateRandomNumber(8));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [userAnswer, setUserAnswer] = useState('');
  const [bestScore, setBestScore] = useState(localStorage.getItem('bestScore') || 0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [fact, setFact] = useState("Fact Incoming");
  const [otherUsers, setOtherUsers] = useState([
    { name: "Baymax", score: 6 },
    { name: "Hiro", score: 8 }
  ]);
  const [maxNumber, setMaxNumber] = useState(8);

  useEffect(() => {
    let timer;
    if (isGameStarted) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isGameStarted]);

  async function saveScore(score, userName) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    console.log('Saving score:', newScore); // Debugging log

    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newScore),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Score saved successfully');
    } catch (error) {
      console.error('Failed to save score:', error);
    }
  }

  useEffect(() => {
    if (timeLeft === 0 && isGameStarted) {
      if (score > bestScore) {
        setBestScore(score);
        localStorage.setItem('bestScore', score);
      }
      setIsGameStarted(false);
      setFact('Seatbelts save lives. Buckle up every time');
      saveScore(score, userName);
    }
  }, [timeLeft, score, bestScore, isGameStarted]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOtherUsers((prevUsers) => [
        ...prevUsers,
        { name: generateRandomUsername(), score: generateRandomScore() }
      ].slice(-4)); // Keep only the latest 4 users
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(userAnswer, 2) === numToConvert) {
      const newScore = score + 1;
      setScore(newScore);
      setTimeLeft(timeLeft + 10);

      if (newScore % 4 === 0) {
        setMaxNumber((prevMax) => Math.min(prevMax * 2, 256));
      }

      setNumToConvert(generateRandomNumber(maxNumber));
      setUserAnswer('');
    }
  };

  const startGame = () => {
    setIsGameStarted(true);
    setScore(0);
    setTimeLeft(60);
    setMaxNumber(8);
    setNumToConvert(generateRandomNumber(8));
    setUserAnswer('');
    setFact("Fact Incoming");
  };

  return (
    <main className="container my-5 text-center flex-grow-1">
      <div className="corner-box position-absolute top start-0 p-3">
        <div className="users">
          User:
          <span className="user-name">{userName.split('@')[0]}</span>
        </div>
        <ul className="notifying mt-3">
          {otherUsers.slice(-4).map((user, index) => (
            <li key={index} className="user-name">{user.name} scored {user.score}</li>
          ))}
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

  function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  function generateRandomUsername() {
    const usernames = ["Alice", "Bob", "Charlie", "Dave", "Eve"];
    return usernames[Math.floor(Math.random() * usernames.length)];
  }

  function generateRandomScore() {
    return Math.floor(Math.random() * 10) + 1;
  }
}