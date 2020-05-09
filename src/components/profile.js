import React, { useState, useEffect } from "react";

export default function Profile() {
  const [state, setstate] = useState({});
  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem("useAuth:user"));
    setTimeout(setstate(userProfile), 1000);
  }, []);
  return (
    state && (
      <div className="profile">
        <img src={state.picture}></img>
        <div className="profileDetails">
          <div>Name: {state.name}</div>
          <div>Email: {state.email}</div>
          <div>Email Verified: {state.email_verified ? "Yes" : "No"}</div>
        </div>
      </div>
    )
  );
}
