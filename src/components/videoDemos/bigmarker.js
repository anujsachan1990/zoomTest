import React from "react";

import Layout from "../layout";

const BigMarker = () => {
  return (
    <Layout hideLogin>
      <h2>Ecamm live and facebook (use pre-recorded + live stream )</h2>
      <a href="https://www.ecamm.com/mac/ecammlive/" target="_blank">
        What is Ecamm Live?{" "}
      </a>
      <br />
      <br />
      <iframe
        id="bigmarker_embed_conference_room"
        src="https://www.bigmarker.com/conferences/b3386f22fcf3/attend_check?iframe=true&webcast=true"
        width="720"
        height="402"
        allowfullscreen="allowfullscreen"
        frameborder="0"
      ></iframe>
    </Layout>
  );
};

export default BigMarker;
