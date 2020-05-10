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
