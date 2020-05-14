import React from "react";

export default function IframeWithMeeting() {
  const urlParams = new URLSearchParams(window.location.search);
  const meetingNumber = urlParams.get("meetingNumber");
  const userName = urlParams.get("userName");

  return (
    <>
      <h1>With Zoom and Slido</h1>
      <p>Both are different iframes</p>
      <div className="iframeWindow">
        <iframe
          id="zoom"
          src={`/zoom/meeting?meetingNumber=${meetingNumber}&userName=${userName}`}
          width="100%"
          height="500"
          allow="camera;microphone"
          SameSite="Lax"
        />
        <iframe
          src="https://app.sli.do/event/gyfkiaft"
          height="500"
          width="100%"
        ></iframe>
      </div>
    </>
  );
}
