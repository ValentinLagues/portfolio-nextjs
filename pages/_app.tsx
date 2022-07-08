import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.css";
import "../i18n";
import Layout from "@components/layout";
import { AppContextProvider } from "src/context/Context";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <AppContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AppContextProvider>
    );
}

export default MyApp;
