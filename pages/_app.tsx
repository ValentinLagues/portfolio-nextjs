import "../i18n";
import "@styles/global.css";
import "tailwindcss/tailwind.css";

import ErrorBoundary from "@components/error/ErrorBoundary";
import ErrorFallback from "@components/error/ErrorFallback";
import Layout from "@components/layout";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import React from "react";
import { AppContextProvider } from "src/context/Context";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo
        title="Valentin Lagues : Web developer"
        description="Javascript full-stack developer"
        canonical="https://valentinlagues-portfolio.vercel.app/"
        openGraph={{
          url: "https://valentinlagues-portfolio.vercel.app/",
          title: "Valentin Lagues : Web developer",
          description:
            "Javascript full-stack developer, front end, back end, React",
          images: [
            {
              url: "https://firebasestorage.googleapis.com/v0/b/portfolio-9f1f5.appspot.com/o/seo-logo.jpg?alt=media&token=6fbf4ab1-6667-4390-a3d4-29f1dabd9c97",
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
          <ErrorBoundary ErrorFallback={ErrorFallback}>
            <Component {...pageProps} />
          </ErrorBoundary>
        </Layout>
      </AppContextProvider>
    </>
  );
}

export default MyApp;
