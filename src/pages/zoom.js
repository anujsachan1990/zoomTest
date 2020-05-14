import React from "react";

import { Router } from "@reach/router";
import PrivateRoute from "../components/PrivateRoute";
import ZoomMeeting from "../components/zoomMeeting";
import Meeting from "../components/meetings";
import IframeWithMeeting from "../components/IframeWithMeeting";
import EcamLive from "../components/videoDemos/ecammlive";
import OneStream from "../components/videoDemos/onestream";
import YoutubeLiveWithSlido from "../components/videoDemos/youtubeliveslido";
import YoutubeSlido from "../components/videoDemos/youtubeslido";
import ZoomWithSlido from "../components/videoDemos/zoomwithslido";
import FlipLiveVideos from "../components/videoDemos/flipLiveVideos";

const App = () => {
  return (
    <Router>
      <PrivateRoute path="/zoom" component={Meeting} />
      <PrivateRoute path="/zoom/yourMeeting" component={IframeWithMeeting} />
      <PrivateRoute path="/zoom/meeting" component={ZoomMeeting} hideLayout />
      <EcamLive path="/zoom/ecamm" />
      <OneStream path="/zoom/onestream" />
      <YoutubeLiveWithSlido path="/zoom/youtubeLiveWithSlido" />
      <YoutubeSlido path="/zoom/youtubeSlido" />
      <ZoomWithSlido path="/zoom/zoomWithSlido" />
      <FlipLiveVideos path="/zoom/flipLiveVideos" />
    </Router>
  );
};
export default App;
