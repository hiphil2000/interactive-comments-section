import React from "react";
import { css } from "@emotion/react";
import { breakpoints, BreakpointType } from "../libs/breakpoint";

interface IContainerProps {
	children?: React.ReactNode;
	maxWidth?: BreakpointType;
}

export default function Container({
	children,
	maxWidth = "md",
}: IContainerProps) {
	const styles = {
		root: css`
          max-width: ${breakpoints[maxWidth]}px;
		  margin: 0 auto;
		`,
	};

	return (
		<div css={styles.root}>{children}</div>
	);
}
