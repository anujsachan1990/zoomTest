import React, { useEffect } from "react";
import { getSearchParams } from "gatsby-query-params";
import { initZoom } from "../utils/zoom";

//import { initZoom } from "../utils/zoom";

const ZoomMeeting = () => {
  const meetingDetails = getSearchParams();

  useEffect(() => {
    initZoom({
      meetingNumber: meetingDetails.meetingNumber,
      userName: meetingDetails.userName,
    });
  }, []);
  return (
    <div>
      <h2>Meeting: {meetingDetails.meetingNumber} </h2>
      <h2>user name: {meetingDetails.userName}</h2>
    </div>
  );
};
export default ZoomMeeting;
