import React, { useState, useEffect } from "react";

import Layout from "../components/layout";

import { Placeholder } from "../components/placeholder-div";

const IndexPage = () => {
  const duration = 228;
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("counter") && time !== null) {
      var sessionTime = localStorage.getItem("counter") * 1;
      setTime(localStorage.getItem("counter") * 1);
    } else {
      setTime(0);
    }

    let counter = time === null ? 0 : sessionTime;
    setInterval(() => {
      if (duration > counter) {
        counter = counter + 1;
        console.log(counter);
        localStorage.setItem("counter", counter);
      } else {
        counter = 0;
      }
    }, 1000);
  }, []);

  return (
    <Layout hideLogin>
      <Placeholder>
        <iframe
          width="860"
          height="500"
          src={`https://www.youtube.com/embed/S76sBMwTxaI?autoplay=1&start=${time}&
          frameborder=0&rel=0&modestbranding=1showinfo=0&controls=0`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullScreen
        ></iframe>
      </Placeholder>
      <button
        onClick={() => {
          setTime(null);
        }}
      >
        {" "}
      </button>
    </Layout>
  );
};

export default IndexPage;
