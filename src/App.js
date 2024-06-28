import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
      </header>
      <div className="Login">
        <h2>Login</h2>
        <form>
          <div>
            <label htmlFor="username">Username-</label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
