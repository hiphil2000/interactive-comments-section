import "@emotion/react";
import ITheme from "../libs/theme";

declare module "@emotion/react" {
	export interface Theme extends ITheme {
	}
}
