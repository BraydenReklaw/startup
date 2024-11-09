import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="bg-dark text-success d-flex flex-column min-vh-100">
        <header className="py-3 border-bottom border-success">
            <div className="container text-center">
                <h1>Binary Blast</h1>
            </div>
            <nav>
                <menu>
                    <ul className="nav justify-content-center">
                        <li className="nav-item"><a className="nav-link text-success" href="index.html">Login</a></li>
                        <li className="nav-item"><a className="nav-link text-success" href="game.html">Play</a></li>
                        <li className="nav-item"><a className="nav-link text-success" href="score&info.html">Scores & learning</a></li>
                    </ul>
                </menu>
            </nav>
        </header>

        <main>App components here</main>

        <footer className="mt-auto py-3 border-top border-success">
            <div className="container text-center">
                <span className="text-reset">Brayden Walker</span>
                <br />
                <a href="https://github.com/BraydenReklaw/startup.git" className="text-success">GitHub</a>
            </div>
        </footer>
    </div>
  )
}