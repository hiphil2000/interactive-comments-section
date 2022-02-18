import React from "react";
import { css, useTheme } from "@emotion/react";
import { IMediaProps } from "./interfaces";

interface IUpProps extends IMediaProps {
	children?: React.ReactNode;
}

export default function Up({
	breakpoint,
	styles: targetStyles,
	mediaStyle,
	children,
}: IUpProps) {
	const theme = useTheme();
	const styles = {
		root: css`
          @media only screen and (min-width: ${theme.breakpoints[breakpoint]}px) {
            ${mediaStyle}
          }
          ${targetStyles}
		`,
	};

	return (
		<div css={styles.root}>{children}</div>
	);
}
