import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.css";
import "../i18n";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return <Component {...pageProps} />;
}

export default MyApp;
