import React from "react";

import Layout from "../components/layout";

const makeAPICall = async () => {
  const data = await fetch(
    "https://anuj-zoom.netlify.app/.netlify/functions/apitest",
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  console.log(data);
};
const API = () => (
  <Layout>
    <button onClick={() => makeAPICall()}>
      Click to Get Data from secure api
    </button>
  </Layout>
);

export default API;
