import React from "react";
import { css, useTheme } from "@emotion/react";
import { IMediaProps } from "./interfaces";

interface IDownProps extends IMediaProps {
	children?: React.ReactNode;
}

export default function Down({
	breakpoint,
	styles: externalStyles,
	mediaStyle,
	children,
}: IDownProps) {
	const theme = useTheme();
	const styles = {
		root: css`
          @media only screen and (max-width: ${theme.breakpoints[breakpoint]}px) {
            ${mediaStyle}
          }
		  ${externalStyles}
		`,
	};

	return (
		<div css={styles.root}>{children}</div>
	);
}
