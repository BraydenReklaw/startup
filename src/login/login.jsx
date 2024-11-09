import React from 'react';

export function Login() {
  return (
    <main className="container my-5 text-center flex-grow-1">
      <h1>Welcome, User, to Binary Blast</h1>
            <form method="get" action="game.html" className="my-4">
                <div className="mb-3">
                    <input type="email" className="form-control text-success border-success" placeholder="your@email.com" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control text-success border-success" placeholder="password" />
                </div>
                <button type="submit" className="btn btn-outline-success">Login</button>
                <button type="submit" className="btn btn-outline-success">Create</button>
            </form>
    </main>
  );
}