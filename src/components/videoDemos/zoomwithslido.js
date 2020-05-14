import React from "react";

export default function ZoomWithSlido() {
  const urlParams = new URLSearchParams(window.location.search);
  const meetingNumber = urlParams.get("meetingNumber");
  const userName = urlParams.get("userName");

  return (
    <>
      <h3>With Zoom </h3>
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
