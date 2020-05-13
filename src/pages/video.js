import React from "react";

import Layout from "../components/layout";

const Video = () => {
  return (
    <Layout hideLogin>
      <h1>test with One Stream and youtube</h1>

      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FoojsRock%2Fvideos%2F268102620993722%2F&show_text=0&width=476"
        width="476"
        height="476"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allowFullScreen="true"
      ></iframe>
    </Layout>
  );
};

export default Video;
