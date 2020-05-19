import React from "react";
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0";

export default function Profile() {
  const { user } = useAuth0();

  return (
    user && (
      <div className="profile">
        <img src={user.picture}></img>
        <div className="profileDetails">
          <div>Name: {user.name}</div>
          <div>Email: {user.email}</div>
          <div>Email Verified: {user.email_verified ? "Yes" : "No"}</div>
        </div>
      </div>
    )
  );
}
