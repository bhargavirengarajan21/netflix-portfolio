import React from "react";
import { AUTH_PROVIDERS } from "../data/loginDetails";

const Login = ({
  email,
  password,
  message,
  setEmail,
  setPassword,
  handleProviderLogin,
  handleEmailLogin,
}) => (
  <div className="login-container">
    <h1 className="login-title">Sign In</h1>
    <div className="login-buttons">
      {AUTH_PROVIDERS.map((prov) =>
        prov.id === "email" ? null : (
          <button
            key={prov.id}
            className={`login-btn login-btn-${prov.id}`}
            onClick={() => handleProviderLogin(prov.id)}
          >
            <img src={prov.icon} alt={prov.label} className="login-icon" />
            {prov.label}
          </button>
        )
      )}
    </div>
    <form className="login-form" onSubmit={handleEmailLogin}>
      <input
        type="email"
        placeholder="Email"
        className="login-input"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="login-input"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button className="login-btn login-btn-email" type="submit">
        Sign in
      </button>
    </form>
    <div>or</div>
    <button onClick={() => handleProviderLogin("guest")} className="login-btn login-btn-guest"> Continue as Guest</button>
    {message && <div className="login-message">{message}</div>}
  </div>
);

export default Login;