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
import FlipLiveVideozoom from "../components/videoDemos/flipLiveVideozoom";
import Bigmarker from "../components/videoDemos/bigmarker";

const App = () => {
  return (
    <Router basepath="/zoom">
      <PrivateRoute path="/" component={Meeting} />
      <PrivateRoute path="/yourMeeting" component={IframeWithMeeting} />
      <PrivateRoute path="/meeting" component={ZoomMeeting} hideLayout />
      <EcamLive path="/ecamm" />
      <OneStream path="/onestream" />
      <YoutubeLiveWithSlido path="/youtubeLiveWithSlido" />
      <YoutubeSlido path="/youtubeSlido" />
      <ZoomWithSlido path="/zoomWithSlido" />
      <FlipLiveVideos path="/flipLiveVideos" />
      <FlipLiveVideozoom path="/flipLiveVideozoom" />
      <Bigmarker path="/bigmarker" />
    </Router>
  );
};
export default App;
