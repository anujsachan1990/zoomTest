import React from "react";

const userProfile = JSON.parse(localStorage.getItem("useAuth:user"));
export default function profile() {
  return (
    userProfile && (
      <div>
        <img src={userProfile.picture}></img>
        <div>Name: {userProfile.name}</div>
        <div>Email: {userProfile.email}</div>
        <div>Email Verified: {userProfile.email_verified ? "Yes" : "No"}</div>
      </div>
    )
  );
}
