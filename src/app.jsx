import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Game } from './game/game';
import { Score } from './score&info/score';

export default function App() {
  return (
    <BrowserRouter>
    <div className="bg-dark text-success d-flex flex-column min-vh-100">
        <header className="py-3 border-bottom border-success">
            <div className="container text-center">
                <h1>Binary Blast</h1>
            </div>
            <nav>
                <menu>
                    <ul className="nav justify-content-center">
                        <li className="nav-item"><NavLink className="nav-link text-success" href=''>Login</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link text-success" to='game'>Play</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link text-success" to='score'>Scores & learning</NavLink></li>
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
    </BrowserRouter>
  )
}