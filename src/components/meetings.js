import React from "react";
import Profile from "../components/profile";
import { initZoom } from "../utils/zoom";
import { navigate } from "@reach/router";

const Meetings = () => {
  return (
    <div className="container">
      <Profile />
      <h2>Upcoming live Webinars</h2>
      <ul>
        <li>
          {" "}
          <p>
            Below Meetings are hardcoded, needs to appear from{" "}
            <a
              target="_blank"
              href="https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetings"
            >
              Zoom API (not available in free plan)
            </a>
          </p>
        </li>
        <li>
          {" "}
          <p>
            Additional info to apprear from Airtable. For security purpose we
            will use Netlify Lambda.{" "}
            <a
              href="https://anuj-zoom.netlify.app/.netlify/functions/hello"
              target="_blank"
            >
              Test API
            </a>
          </p>
        </li>
        <li>
          <p>
            Meeting Can be directly Created in Zoom from Calederly{" "}
            <a href="https://calendly.com/anujsachan1991" target="_blank">
              Meeting Schedule link
            </a>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://developer.calendly.com/docs/user-event-types"
              target="_blank"
            >
              API Link
            </a>
          </p>
        </li>
      </ul>
      <h2>Meeting List (hardcoded)</h2>
      <div>
        <ul>
          <li>
            Meeting 1{" "}
            <button
              onClick={() =>
                navigate(
                  `/zoom/meeting?meetingNumber=75827477148&userName=${
                    JSON.parse(localStorage.getItem("useAuth:user")).name
                  }`
                )
              }
            >
              {" "}
              join
            </button>
          </li>
          <li>
            Meeting 2{" "}
            <button
              onClick={() =>
                navigate(
                  `/zoom/meeting?meetingNumber=72874024378&userName=${
                    JSON.parse(localStorage.getItem("useAuth:user")).name
                  }`
                )
              }
            >
              {" "}
              join
            </button>
          </li>
          <li>
            Meeting 3{" "}
            <button
              onClick={() =>
                navigate(
                  `/zoom/meeting?meetingNumber=77654577325&userName=${
                    JSON.parse(localStorage.getItem("useAuth:user")).name
                  }`
                )
              }
            >
              {" "}
              join
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Meetings;
