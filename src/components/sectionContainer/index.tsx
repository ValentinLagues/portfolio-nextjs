import React, { ReactNode } from "react";

type IProps = {
    children: ReactNode;
    sectionId: string;
};

const SectionContainer = ({ children, sectionId }: IProps): JSX.Element => {
    return (
        <div
            id={sectionId}
            className="flex flex-col justify-center w-full h-full min-h-screen px-5 md:px-14"
        >
            {children}
        </div>
    );
};

export default SectionContainer;
