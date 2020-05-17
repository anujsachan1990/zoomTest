import React from "react";
import { navigate } from "@reach/router";

import { AuthProvider } from "react-use-auth";

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="dev-uh80r-xh.au.auth0.com"
    auth0_client_id="Hs79BwTcnlTVe9gv4l4tORzhqUBfJKoy"
    audience={`https://dev-uh80r-xh.au.auth0.com/api/v2/`}
    responseType={"token id_token"}
    scope={"openid profile email"}
  >
    {element}
  </AuthProvider>
);
