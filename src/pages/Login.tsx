import React, { useState } from "react";
import logo from '../images/logo.png'
const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main
      className="login-page"
      style={{
        backgroundImage: "url(../images/login-background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="logo">
        <img src = {logo} alt="LMS-Elearning"  />
      </div>

    </main>
  );
};

export default Login;