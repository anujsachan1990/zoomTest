import React from "react";
import { navigate } from "gatsby";

import { AuthProvider } from "react-use-auth";

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="dev-uh80r-xh.au.auth0.com"
    auth0_client_id="Hs79BwTcnlTVe9gv4l4tORzhqUBfJKoy"
  >
    {element}
  </AuthProvider>
);
