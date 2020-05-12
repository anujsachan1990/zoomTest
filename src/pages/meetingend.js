import React from "react";

import { Placeholder } from "../components/placeholder-div";

const Meetingend = () => (
  <>
    <Placeholder>
      <p>Click below to rejoin meeting</p>
      <button onClick={() => window.parent.location.reload()}>Rejoin</button>
    </Placeholder>
  </>
);

export default Meetingend;
