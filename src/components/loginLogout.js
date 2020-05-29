import React from "react";
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0";

const LoginLogout = () => {
  const { isAuthenticated, loading, logout, loginWithRedirect } = useAuth0();
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
          <button onClick={() => loginWithRedirect()}>Log in</button>
        </>
      )}
    </div>
  );
};

export default LoginLogout;
