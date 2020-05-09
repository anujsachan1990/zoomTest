import React from "react";
import { navigate } from "@reach/router";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Placeholder } from "../components/placeholder-div";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Placeholder>
      <p>click below to navigate to scheduled meeting</p>
      <button onClick={() => navigate("/zoom")}>Go to Meeting</button>
    </Placeholder>
  </Layout>
);

export default IndexPage;
