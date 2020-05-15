import React, { useEffect } from "react";
import { initZoom } from "../utils/zoom";

//import { initZoom } from "../utils/zoom";

const ZoomMeeting = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const meetingNumber = urlParams.get("meetingNumber");
  const userName = urlParams.get("userName");
  const userEmail = urlParams.get("userEmail");
  useEffect(() => {
    initZoom({
      meetingNumber,
      userName,
      userEmail,
    });
  }, []);

  return null;
};
export default ZoomMeeting;
