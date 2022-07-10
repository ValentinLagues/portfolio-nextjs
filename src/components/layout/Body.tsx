import React, { ReactNode } from "react";

type ComponentProps = {
  children: ReactNode;
};

const Body = ({ children }: ComponentProps): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-fixed bg-center bg-contain lgbg-cover bg-city-pattern-static lg:bg-city-pattern lg:bg-contain sm:h-full">
      {children}
    </div>
  );
};

export default Body;
