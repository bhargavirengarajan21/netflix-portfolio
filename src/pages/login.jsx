import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import {
  loginWithGoogle,
  loginWithApple,
  loginWithEmail,
  loginAsGuest,
  sendTokenToBackend,
} from "../helper/authHelper";

const LoginPage = ({DataContext}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleProviderLogin = async (providerId) => {
    try {
      let idToken;
      if (providerId === "google") idToken = await loginWithGoogle();
      else if (providerId === "apple") idToken = await loginWithApple();
      else if (providerId === "guest") idToken = await loginAsGuest();
      else return;
      if (idToken) {
        const res = await sendTokenToBackend(idToken);
        setMessage(`Welcome, ${res.user.email || "Guest"}!`);
        navigate("/browse");
      }
    } catch (err) {
      setMessage(err.message || "Login failed");
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const idToken = await loginWithEmail(email, password);
      const res = await sendTokenToBackend(idToken);
      setMessage(`Welcome, ${res.user.email}!`);
      navigate("/browse");
    } catch (err) {
      setMessage(err.message || "Login failed");
    }
  };

  return (
    <Login
      email={email}
      password={password}
      message={message}
      setEmail={setEmail}
      setPassword={setPassword}
      handleProviderLogin={handleProviderLogin}
      handleEmailLogin={handleEmailLogin}
    />
  );
};

export default LoginPage;