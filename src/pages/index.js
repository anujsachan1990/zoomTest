import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useAuth } from "react-use-auth";
import LoginLogout from "../components/nav";
import { Placeholder } from "../components/placeholder-div";
import { navigate } from "gatsby";

const IndexPage = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Layout hideLogin>
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

      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FoojsRock%2Fvideos%2F378823583034783%2F"
        width="500"
        height="280"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
        allowFullScreen="true"
      ></iframe>

      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FoojsRock%2Fvideos%2F2586421198354058%2F"
        width="500"
        height="280"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
        allowFullScreen="true"
      ></iframe>

      <SEO title="Home" />
      <Placeholder>
        {!isAuthenticated() ? (
          <>
            <p>Please Login to see your scheduled meetings</p>
            <LoginLogout />
          </>
        ) : (
          <>
            <p>Click below to see your meetings</p>
            <button onClick={() => navigate("/zoom")}>your meetings</button>
            <LoginLogout />
          </>
        )}
      </Placeholder>
    </Layout>
  );
};

export default IndexPage;
