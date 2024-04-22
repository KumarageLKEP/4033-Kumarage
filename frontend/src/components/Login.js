import React, { useState } from 'react';
import '../App.css';

const Login = ({ onLogChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [log, setLog] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // Track login state

  const handleLogin = () => {
    // Perform validation and authentication here
    if (email === 'user@gmail.com' && password === '1234') {
      // Successful login, you can redirect to another page or perform any other actions
      console.log('Login successful');
      // Redirect to the homepage, replace '/home' with your desired route
      setLog('1');
      onLogChange('1');
      setLoggedIn(true); // Set login state to true
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container colorful-login">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mt-5 mb-4">Login</h2>
          {error && <p className="text-danger">{error}</p>}
          {loggedIn ? (
            <p className="text-success colorful-log">{log}</p>
          ) : (
            <form>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control colorful-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control colorful-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-primary colorful-button"
                  onClick={handleLogin}
                >
                  Log In
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
