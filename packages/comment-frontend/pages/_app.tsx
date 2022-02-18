import { AppProps } from "next/app";
import Head from "next/head";
import CssReset from "../src/components/common/cssReset";
import { SWRConfig } from "swr";
import Axios from "axios";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "../src/libs/theme";

interface ICustomAppProps extends AppProps {
}

async function defaultFetcher(key: string): Promise<any> {
	const response = await Axios.get(key);
	return response.data;
}

export default function CustomApp({
	Component,
	pageProps,
}: ICustomAppProps) {
	return (
		<SWRConfig value={{
			fetcher: defaultFetcher,
			fallback: {
				"/api/user/me": {
					"test": "test",
				},
			},
		}}>
			<ThemeProvider theme={defaultTheme}>
				<Head>
					<title>interactive-comments</title>
				</Head>
				<CssReset />
				<Component {...pageProps} />
			</ThemeProvider>
		</SWRConfig>
	);
}
