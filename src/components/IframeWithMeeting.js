import React from "react";

export default function IframeWithMeeting() {
  const urlParams = new URLSearchParams(window.location.search);
  const meetingNumber = urlParams.get("meetingNumber");
  const userName = urlParams.get("userName");

  return (
    <div className="iframeWindow">
      <iframe
        id="zoom"
        src={`/zoom/meeting?meetingNumber=${meetingNumber}&userName=${userName}`}
        width="100%"
        height="500"
        allow="camera;microphone"
      />
      <iframe
        id="slido"
        src={"https://app.sli.do/event/qly6e4ur/live/polls?w=cOWOT"}
        width="100%"
        height="500"
      />
    </div>
  );
}
