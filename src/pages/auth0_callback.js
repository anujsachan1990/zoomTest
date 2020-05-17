import React, { useEffect } from "react";
import Layout from "../components/layout";
import { useAuth } from "react-use-auth";

const Auth0CallbackPage = () => {
  const { handleAuthentication, authResult } = useAuth();

  useEffect(() => {
    if (authResult) {
      localStorage.setItem("accessToken", authResult.accessToken);
    }
    handleAuthentication({ postLoginRoute: "/zoom" });
  }, []);

  return (
    <Layout>
      <p>
        This is the auth callback page, you should be redirected immediately.
      </p>
    </Layout>
  );
};

export default Auth0CallbackPage;
