import { ReactNode } from "react";
import Head from "next/head";

import Body from "./Body";
import Header from "./header";
import Footer from "./Footer";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-fixed bg-black bg-center md:bg-cover lg:bg-contain md:bg-city-pattern sm:h-full">
      <Head>
        <title>Valentin Lagues : Web Developer</title>
        <meta
          name="Valentin Lagues : Web developer"
          content="Welcome to my portfolio"
        />
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/portfolio-9f1f5.appspot.com/o/logo.png?alt=media&token=06a4c36a-17c2-4a79-9415-b530a00c4852"
        />
      </Head>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  );
};

export default Layout;
