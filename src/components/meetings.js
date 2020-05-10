import React from "react";
import Profile from "../components/profile";
import { initZoom } from "../utils/zoom";
import { navigate } from "@reach/router";

const Meetings = () => {
  return (
    <div className="container">
      <Profile />
      <h1>Upcoming live Webinars</h1>
      <div>
        <ul>
          <li>
            Meeting 1{" "}
            <button
              onClick={() =>
                navigate(
                  `/zoom/meeting?meetingNumber=79631636690&userName=${
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
                  `/zoom/meeting?meetingNumber=79753241655&userName=${
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
                  `/zoom/meeting?meetingNumber=76011300805&userName=${
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
