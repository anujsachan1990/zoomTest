import React from "react";

import Layout from "../components/layout";

const Video = () => {
  return (
    <Layout hideLogin>
      <h1>test with Ecam live and facebook</h1>

      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FoojsRock%2Fvideos%2F1552934741524051%2F&show_text=0&width=560"
        width="800"
        height="900"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allowFullScreen="true"
      ></iframe>
    </Layout>
  );
};

export default Video;
