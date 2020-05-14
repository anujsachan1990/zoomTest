import React from "react";
import Layout from "../layout";
export default function IframeWithMeeting() {
  return (
    <Layout>
      <h3>With Youtube live video</h3>
      <iframe
        src="https://app.sli.do/event/5c0irwhb"
        width="100%"
        height="500"
      ></iframe>
    </Layout>
  );
}
