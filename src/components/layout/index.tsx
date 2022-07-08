import { ReactNode } from "react";
import Head from "next/head";
import Header from "./header/index";
import Body from "./Body";

interface ILayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: ILayoutProps): JSX.Element => {
    return (
        <div className="w-full h-full">
            <Head>
                <title>Valentin Lagues : Web Developer</title>
                <meta
                    name="Valentin Lagues : Web developer"
                    content="Welcome to my portfolio"
                />
                <link
                    rel="icon"
                    href="https://res.cloudinary.com/dnw0kiu56/image/upload/v1657181416/portfolio/logo_fgfrbk.png"
                />
            </Head>
            <Header />
            <Body>{children}</Body>
        </div>
    );
};

export default Layout;
