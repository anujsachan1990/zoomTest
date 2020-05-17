import React from "react";

import Layout from "../components/layout";

const makeAPICall = async () => {
  const data = await fetch(
    "https://anuj-zoom.netlify.app/.netlify/functions/apitest"
  );
  console.log(data);
};
const API = () => (
  <Layout>
    <button onClick={() => makeAPICall()}>
      Click to Get Data from Airtable
    </button>
  </Layout>
);

export default API;
