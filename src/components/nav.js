import React from "react";
// import { navigate } from "gatsby";

import { useAuth } from "react-use-auth";

export default () => {
  const { login, logout } = useAuth();
  const isLoggedin = JSON.parse(localStorage.getItem("useAuth:user"));

  return (
    <nav className="container">
      {!isLoggedin ? (
        <button onClick={() => login()}>Login / SignUp </button>
      ) : (
        <button
          onClick={() => {
            localStorage.removeItem("useAuth:user");
            logout();
          }}
        >
          Logout
        </button>
      )}
    </nav>
  );
};
