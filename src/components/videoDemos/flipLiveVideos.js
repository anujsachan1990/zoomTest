import React, { useState } from "react";
import Layout from "../layout";

export default function FlipVideo() {
  const [toggle, setToggle] = useState(true);
  return (
    <Layout hideLogin>
      <h2>With Youtube live video</h2>
      <div className="flipper">
        <div>
          {toggle ? (
            <iframe
              height="500"
              className="video1"
              src="https://www.youtube.com/embed/6xrJy-1_qS4?autoplay=1"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ) : (
            <iframe
              height="500"
              className="video2"
              src="https://www.youtube.com/embed/9Auq9mYxFEE?autoplay=1"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
        </div>
        <iframe
          src="https://app.sli.do/event/o7jwlgb0"
          height="500"
          className="slido"
        ></iframe>
      </div>
      <br />
      <button onClick={() => setToggle(!toggle)}>Switch Videos</button>
    </Layout>
  );
}
