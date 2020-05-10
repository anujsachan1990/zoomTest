import React, { useEffect } from "react";
import { getSearchParams } from "gatsby-query-params";
import { initZoom } from "../utils/zoom";

//import { initZoom } from "../utils/zoom";
const userName = JSON.parse(localStorage.getItem("useAuth:user")).name;
const ZoomMeeting = () => {
  const meetingDetails = getSearchParams();
  initZoom({
    meetingNumber: meetingDetails.meetingNumber,
    userName: userName,
  });
  useEffect(() => {}, []);
  return (
    <div>
      <h1>Meeting :{meetingDetails.meetingNumber} </h1>
      <h2>userName : {userName}</h2>;
    </div>
  );
};
export default ZoomMeeting;
