import React from "react";

const Wrapper = ({ children, classes: { wrapper } }) => (
  <div className={wrapper}>{children}</div>
);

export default Wrapper;
