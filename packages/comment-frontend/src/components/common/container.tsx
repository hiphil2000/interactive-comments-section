import React from "react";
import { css, useTheme } from "@emotion/react";
import { BreakpointType } from "../../libs/theme";

interface IContainerProps {
	children?: React.ReactNode;
	maxWidth?: BreakpointType;
}

export default function Container({
	children,
	maxWidth = "md",
}: IContainerProps) {
	const theme = useTheme();
	const styles = {
		root: css`
          max-width: ${theme.breakpoints[maxWidth]}px;
		  margin: 0 auto;
		`,
	};

	return (
		<div css={styles.root}>{children}</div>
	);
}
