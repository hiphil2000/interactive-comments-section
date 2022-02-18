export type BreakpointType = "xs" | "sm" | "md" | "lg" | "xl";
export type Breakpoints = {
	[key in BreakpointType]: number;
};

export interface IPalette {
	background: string;
	card: string;
	commonText: string;
	disabledText: string;
	primary: string;
	error: string;
}

export interface ITypography {
	fontSize: number;
	fontWeight: number;
}

export default interface ITheme {
	palette: IPalette;
	baseFontSize: number;
	spacing: number;
	breakpoints: Breakpoints;
}

export const defaultTheme: ITheme = {
	baseFontSize: 16,
	palette: {
		background: "#FFFFFF",
		card: "#FFFEFF",
		commonText: "#3A3E47",
		disabledText: "#ABAFB2",
		primary: "#5255B6",
		error: "#ED6164",
	},
	breakpoints: {
		xs: 595,
		sm: 600,
		md: 768,
		lg: 889,
		xl: 1200,
	},
	spacing: 8,
};
