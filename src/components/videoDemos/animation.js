import React from "react";

import Layout from "../layout";

const Video = () => {
  return (
    <Layout hideLogin>
      <iframe
        width="100%"
        height="700"
        src="https://www.youtube.com/embed/2T5ldM2qNCA"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="allowfullscreen"
      ></iframe>
    </Layout>
  );
};

export default Video;
