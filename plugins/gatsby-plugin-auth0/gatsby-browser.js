import React from "react";
import { Auth0Provider } from "./auth";
import { navigate } from "gatsby";

const onRedirectCallback = (appState) =>
  appState && appState.targetUrl && navigate(appState.targetUrl);

export const wrapRootElement = ({ element }, pluginOptions) => {
  return (
    <Auth0Provider
      domain={pluginOptions.domain}
      client_id={pluginOptions.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience="https://dev-uh80r-xh.au.auth0.com/api/v2/"
    >
      {element}
    </Auth0Provider>
  );
};
