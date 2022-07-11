import React, { ReactNode } from "react";

type ComponentProps = {
  children: ReactNode;
};

const Body = ({ children }: ComponentProps): JSX.Element => {
  return <div>{children}</div>;
};

export default Body;
