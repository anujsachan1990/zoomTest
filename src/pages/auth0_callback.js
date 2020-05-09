import React, { useEffect } from "react";
import Layout from "../components/layout";
import { useAuth } from "react-use-auth";

const Auth0CallbackPage = () => {
  const { handleAuthentication } = useAuth();
  useEffect(() => {
    handleAuthentication({ postLoginRoute: "/zoom" });
  }, []);

  return (
    <Layout>
      <h1>
        This is the auth callback page, you should be redirected immediately.
      </h1>
    </Layout>
  );
};

export default Auth0CallbackPage;
