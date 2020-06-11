import App, { AppProps } from 'next/app';
import React, { FC, Fragment, CSSProperties } from 'react';
import '../styles/global.scss'
import { useState, useEffect } from "react";
export type Props = AppProps

export type ThemeCSSProperties = CSSProperties & any

export const Root: FC<Props> = ({ pageProps, Component }) => {
    const [loading, setLoading] = useState(false);

    return (
          <Component {...pageProps} />
    );
};

/*Layout.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};*/

export default Root;