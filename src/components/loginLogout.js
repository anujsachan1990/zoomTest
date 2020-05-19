import React from "react";
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0";

const LoginLogout = () => {
  const { isAuthenticated, loading, logout, loginWithPopup } = useAuth0();
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {isAuthenticated ? (
        <>
          <button onClick={() => logout()}>Log out</button>
        </>
      ) : (
        <>
          <button onClick={() => loginWithPopup()}>Log in</button>
        </>
      )}
    </div>
  );
};

export default LoginLogout;
