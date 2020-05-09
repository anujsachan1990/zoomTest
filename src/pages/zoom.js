import React, { useEffect } from "react";
import { initZoom } from "../utils/zoom";
import Layout from "../components/layout";
import Profile from "../components/profile";
import { Router } from "@reach/router";
import PrivateRoute from "../components/PrivateRoute";

const Zoom = () => {
  useEffect(() => {
    // initZoom()
  }, []);

  return (
    <div className="container">
      <Profile />
      <h1>Upcoming live Webinars</h1>
      <div>
        <ul>
          <li>
            Meeting 1{" "}
            <button onClick={() => initZoom({ meetingNumber: 79631636690 })}>
              {" "}
              join
            </button>
          </li>
          <li>
            Meeting 2{" "}
            <button onClick={() => initZoom({ meetingNumber: 79753241655 })}>
              {" "}
              join
            </button>
          </li>
          <li>
            Meeting 3{" "}
            <button onClick={() => initZoom({ meetingNumber: 76011300805 })}>
              {" "}
              join
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Layout>
      <Router basepath="/">
        <PrivateRoute path="/zoom" component={Zoom} />
      </Router>
    </Layout>
  );
};
export default App;
