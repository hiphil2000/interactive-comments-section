import { AppProps } from "next/app";
import Head from "next/head";

interface ICustomAppProps extends AppProps {
}

export default function CustomApp({
    Component,
    pageProps
}: ICustomAppProps) {
    return (
        <>
            <Head>
                <title>interactive-comments</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
