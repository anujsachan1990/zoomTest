import React from "react";

import Layout from "../components/layout";

const Video = () => {
  return (
    <Layout hideLogin>
      <h1>test with One Stream</h1>

      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FoojsRock%2Fvideos%2F336073037379749%2F"
        width="500"
        height="280"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
        allowFullScreen="true"
      ></iframe>

      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FoojsRock%2Fvideos%2F641959063024208%2F"
        width="500"
        height="280"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
        allowFullScreen="true"
      ></iframe>

      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FoojsRock%2Fvideos%2F3126622190730388%2F"
        width="500"
        height="280"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
        allowFullScreen="true"
      ></iframe>

      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FoojsRock%2Fvideos%2F260515621970426%2F"
        width="500"
        height="280"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
        allowFullScreen="true"
      ></iframe>
    </Layout>
  );
};

export default Video;
