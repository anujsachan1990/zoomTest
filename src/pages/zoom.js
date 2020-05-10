import React from "react";
import Layout from "../components/layout";
import { Router } from "@reach/router";
import PrivateRoute from "../components/PrivateRoute";
import ZoomMeeting from "../components/zoomMeeting";
import Meeting from "../components/meetings";

const App = () => {
  return (
    <Layout>
      <Router basepath="/">
        <PrivateRoute path="/zoom" component={Meeting} />
        <PrivateRoute path="/zoom/meeting" component={ZoomMeeting} />
      </Router>
    </Layout>
  );
};
export default App;
