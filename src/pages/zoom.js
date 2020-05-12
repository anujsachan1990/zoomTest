import React from "react";

import { Router } from "@reach/router";
import PrivateRoute from "../components/PrivateRoute";
import ZoomMeeting from "../components/zoomMeeting";
import Meeting from "../components/meetings";
import IframeWithMeeting from "../components/IframeWithMeeting";

const App = () => {
  return (
    <Router basepath="/">
      <PrivateRoute path="/zoom" component={Meeting} />
      <PrivateRoute path="/zoom/yourMeeting" component={IframeWithMeeting} />
      <PrivateRoute path="/zoom/meeting" component={ZoomMeeting} hideLayout />
    </Router>
  );
};
export default App;
