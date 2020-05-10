import React, { useEffect } from "react";
import { initZoom } from "../utils/zoom";

//import { initZoom } from "../utils/zoom";

const ZoomMeeting = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const meetingNumber = urlParams.get("meetingNumber");
  const userName = urlParams.get("userName");
  useEffect(() => {
    initZoom({
      meetingNumber,
      userName,
    });
  }, []);

  return (
    <div>
      <h2>Meeting: {meetingNumber} </h2>
      <h2>user name: {userName}</h2>
      <p>Please wait while your meeting is loading...</p>
    </div>
  );
};
export default ZoomMeeting;
