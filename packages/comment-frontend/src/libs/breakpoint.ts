export type BreakpointType = "xs" | "sm" | "md" | "lg" | "xl";
export type IBreakpoints = {
	[key in BreakpointType]: number;
};

// TODO: change to global breakpoint
export const breakpoints: IBreakpoints = {
	xs: 595,
	sm: 600,
	md: 768,
	lg: 889,
	xl: 1200,
};
