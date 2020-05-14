import React from "react";

import Layout from "../layout";

import { Placeholder } from "../placeholder-div";

const IndexPage = () => {
  return (
    <Layout hideLogin>
      <div>
        <h2>One Stream with Youtube Live Scheduled Pre-recorded</h2>
        <iframe
          src="https://app.sli.do/event/5c0irwhb"
          height="500"
          width="100%"
        ></iframe>

        <h2>One Stream with facebook Live Finsished Event</h2>
        <iframe
          src="https://app.sli.do/event/cen8totn"
          height="100%"
          width="100%"
          height="500"
        ></iframe>
      </div>
    </Layout>
  );
};

export default IndexPage;
