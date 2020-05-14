import React from "react";

import Layout from "../layout";

const Video = () => {
  return (
    <Layout hideLogin>
      <h2>Ecamm live and facebook (use pre-recorded + live stream )</h2>
      <a href="https://www.ecamm.com/mac/ecammlive/" target="_blank">
        What is Ecamm Live?{" "}
      </a>
      <br />
      <br />
      <iframe
        src="https://app.sli.do/event/clcqthjy"
        height=" 560px"
        width="100%"
      ></iframe>
    </Layout>
  );
};

export default Video;
