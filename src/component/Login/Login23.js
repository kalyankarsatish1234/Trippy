import React, { useState } from 'react';
import './Login23.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formType, setFormType] = useState('login'); // 'login', 'signup', 'forgotPassword'

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Logging in with email:', email, 'and password:', password);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic
    console.log('Signing up with email:', email, 'and password:', password);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Handle forgot password logic
    console.log('Sending password reset email to:', email);
  };

  const handleContinueWithGoogle = (e) => {
    e.preventDefault();
    // Handle continue with Google logic
    console.log('Continuing with Google');
  };

  const handleContinueWithPhoneNumber = (e) => {
    e.preventDefault();
    // Handle continue with phone number logic
    console.log('Continuing with Phone Number:', phoneNumber);
  };

  const switchToLogin = () => {
    setFormType('login');
  };

  const switchToSignup = () => {
    setFormType('signup');
  };

  const switchToForgotPassword = () => {
    setFormType('forgotPassword');
  };

  return (
    <div className="login-container">
      {formType === 'login' && (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            Don't have an account? <span onClick={switchToSignup}>Sign up</span>
          </p>
          <p onClick={switchToForgotPassword}>Forgot password?</p>
        </form>
      )}

      {formType === 'signup' && (
        <form onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <span onClick={switchToLogin}>Login</span>
          </p>
        </form>
      )}

      {formType === 'forgotPassword' && (
        <form onSubmit={handleForgotPassword}>
          <h2>Forgot Password</h2>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Reset Password</button>
          <p onClick={switchToLogin}>Back to Login</p>
        </form>
      )}

      <div className="external-auth-options">
        <button onClick={handleContinueWithGoogle}>Continue with Google</button>
        <form onSubmit={handleContinueWithPhoneNumber}>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit">Continue with Phone Number</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
