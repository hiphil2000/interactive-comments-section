import React from "react";
import { css } from "@emotion/react";
import { Breakpoints, BreakpointType } from "../../libs/theme";

interface IAvatarProps {
	src: string;
	alt?: string;
	size?: BreakpointType;
}

const avatarBreakpoints: Breakpoints = {
	xs: 24,
	sm: 28,
	md: 32,
	lg: 64,
	xl: 128,
};

export default function Avatar({
	src,
	alt = "",
	size = "md",
}: IAvatarProps) {
	const styles = {
		root: css`
          display: inline-block;
          width: ${avatarBreakpoints[size]}px;
          height: ${avatarBreakpoints[size]}px;
          text-align: center;
          border-radius: 999px;
          overflow: hidden;
		`,
		image: css`
          height: 100%;
          width: auto;
		`,
	};
	const isWebp = src.endsWith(".webp");
	const actualSrc = isWebp ? src.replace(".webp", ".png") : src;

	return (
		<div css={styles.root}>
			{isWebp &&
				<source srcSet={src} type="image/webp" />
			}
			<img src={actualSrc} alt={alt} css={styles.image} />
		</div>
	);
}
