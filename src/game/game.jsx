import React from 'react';
import './game.css';

export function Game() {
  return (
    <main className="container my-5 text-center flex-grow-1">
      <div className="corner-box position-absolute top-0 start-0 p-3">
                <div className="users">
                    User:
                    <span className="user-name">Temporary Name</span>
                </div>
            
                <ul className="notifying mt-3">
                    <li className="user-name">Baymax scored 6</li>
                    <li className="user-naem">Hiro scored 8</li>
                </ul>
            </div>

            

            <br />
            <div className="game mt-4">
                <div className="game-box">
                    <div className="num-data-container">
                        <div className="num-to-convert-box">
                            <span id="num_to_convert" className="num-text">14</span>
                        </div>
                        <div className="mid-game-data">
                            <ul className="list-unstyled">
                                <li>
                                    Score: <span id="game-score">5</span>
                                </li>
                                <li>
                                    Time left: <span className="countdown">0:46</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            
                <form className="game-input">
                    <input type="text" id="user-answer" pattern="^[01]{1,8}$" title="0 or 1 only" placeholder="00000000" className="input-answer" />
                </form>
            </div>

            <div>
                <button className="btn btn-outline-success mt-3">Play</button>
            </div>

            <br />

            <div className="fact_box mt-4 border-top border-success">
                <span id="fact">Fact incoming</span>
            </div>
    </main>
  );
}