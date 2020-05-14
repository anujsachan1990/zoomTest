import React from "react";
import Layout from "../layout";
export default function IframeWithMeeting() {
  return (
    <Layout>
      <h3>With Youtube live video</h3>
      <iframe
        src="https://app.sli.do/event/37tabfoo"
        height="600"
        width="100%"
      ></iframe>
    </Layout>
  );
}
