import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.css";
import "../i18n";
import Layout from "@components/layout";
import { AppContextProvider } from "src/context/Context";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo
        title="Valentin Lagues : Web developer"
        description="Javascript full-stack developer"
        canonical="https://portfolio-valentinlagues.vercel.app/"
        openGraph={{
          url: "https://portfolio-valentinlagues.vercel.app/",
          title: "Valentin Lagues : Web developer",
          description:
            "Javascript full-stack developer, front end, back end, React",
          images: [
            {
              url: "https://res.cloudinary.com/dnw0kiu56/image/upload/v1657185046/portfolio/seologo_mcazhi.jpg",
              width: 200,
              height: 200,
              alt: "logo",
            },
          ],
          site_name: "Valentin Lagues : Web developer",
        }}
      />
      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </>
  );
}

export default MyApp;
