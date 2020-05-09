import React from "react";
// import { navigate } from "gatsby";

import { useAuth } from "react-use-auth";

export default () => {
  const { isAuthenticated, login, logout } = useAuth();
  return (
    <nav className="container">
      {!isAuthenticated() ? (
        <button onClick={() => login()}>Login</button>
      ) : (
        <button onClick={() => logout()}>Logout</button>
      )}
    </nav>
  );
};
