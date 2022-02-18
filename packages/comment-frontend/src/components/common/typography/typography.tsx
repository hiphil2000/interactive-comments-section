import React from "react";
import { Headings, TypographyType } from "./interfaces";
import { css, useTheme } from "@emotion/react";
import { IComponentBase } from "../../interfaces";

interface ITypographyProps extends IComponentBase {
	variant?: TypographyType;
	children?: React.ReactNode;
}

export default function Typography({
	variant,
	styles: externalCss,
	children,
}: ITypographyProps) {
	const theme = useTheme();
	const styles = {
		typography: css`
          margin: 0;
          color: ${theme.palette.commonText};
          ${externalCss};
		`,
	};

	console.log(externalCss);

	const TypographyTag = variant?.startsWith("h") ?
		variant as Headings :
		"p" as keyof JSX.IntrinsicElements;

	return (
		<TypographyTag css={styles.typography}>{children}</TypographyTag>
	);
}
