import React from 'react';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className="container my-5 text-center flex-grow-1">
      {/* <h1>Welcome, User, to Binary Blast</h1>
            <form method="get" action="game.html" className="my-4">
                <div className="mb-3">
                    <input type="email" className="form-control text-success border-success" placeholder="your@email.com" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control text-success border-success" placeholder="password" />
                </div>
                <button type="submit" className="btn btn-outline-success">Login</button>
                <button type="submit" className="btn btn-outline-success">Create</button>
            </form> */}
        <div>
        {authState !== AuthState.Unknown && <h1>Welcome to Binary Blast</h1>}
        {authState === AuthState.Authenticated && <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
        </div>
    </main>
  );
}