import React from "react";
import Layout from "../layout";

export default function IframeWithMeeting() {
  return (
    <Layout hideLogin>
      <h2>With Youtube video</h2>
      <iframe
        src="https://app.sli.do/event/8schaaq5"
        height="500px"
        width="100%"
      ></iframe>
    </Layout>
  );
}
