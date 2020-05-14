import React from "react";

import Layout from "../layout";

import { Placeholder } from "../placeholder-div";

const IndexPage = () => {
  return (
    <Layout hideLogin>
      <Placeholder>
        <div
          style={{
            display: "flex",
          }}
        >
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FoojsRock%2Fvideos%2F557277038497489%2F"
            width="500"
            height="280"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            allowFullScreen="true"
          ></iframe>

          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FoojsRock%2Fvideos%2F956062928177776%2F"
            width="500"
            height="280"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            allowFullScreen="true"
          ></iframe>
        </div>
      </Placeholder>
    </Layout>
  );
};

export default IndexPage;
