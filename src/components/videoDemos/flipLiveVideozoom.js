import React, { useState, useEffect } from "react";
import Layout from "../layout";

export const FlipLiveVideozoom = () => {
  const [toggle, setToggle] = useState(true);
  const urlParams = new URLSearchParams(window.location.search);
  const meetingNumber = urlParams.get("meetingNumber");
  const userName = urlParams.get("userName");
  const userEmail = urlParams.get("userEmail");

  const loadVideo = () => {
    // the Player object is created uniquely based on the id in props

    new window.YT.Player(`player`, {
      videoId: "eGLSPyGszjo",
      height: "500",
      width: "740",
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  };

  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  const onPlayerStateChange = (event) => {
    if (event.data === 0) {
      setToggle(!toggle);
    }
  };

  useEffect(() => {
    if (!window.YT) {
      // If not, load the script asynchronously
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = loadVideo;

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      // If script is already there, load the video directly
      loadVideo();
    }
  }, []);

  return (
    <Layout hideLogin>
      <h2>With Youtube Pre-recorded to Zoom auto Switch</h2>

      <div className="flipper">
        <div>
          <div class={!toggle ? "hide" : "show"}>
            <div id="player"></div>{" "}
          </div>
          {!toggle && (
            <div class={toggle ? "hide" : "show"}>
              <iframe
                id="zoom"
                src={`/zoom/meeting?meetingNumber=${meetingNumber}&userName=${userName}&userEmail=${userEmail}`}
                width="700"
                height="500"
                allow="camera;microphone"
                SameSite="Lax"
              />
            </div>
          )}
        </div>
        <iframe
          src="https://app.sli.do/event/o7jwlgb0"
          height="500"
          className="slido"
        ></iframe>
      </div>
      <br />
    </Layout>
  );
};
export default FlipLiveVideozoom;
