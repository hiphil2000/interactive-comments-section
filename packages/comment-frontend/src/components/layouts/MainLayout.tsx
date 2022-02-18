import React from "react";
import { css, useTheme } from "@emotion/react";
import Container from "../common/container";

interface IMainLayoutProps {
	children?: React.ReactNode;
}

export default function MainLayout({
	children,
}: IMainLayoutProps) {
	const theme = useTheme();
	const styles = {
		root: css`
          flex: 1;
          padding: ${theme.spacing * 6}px ${theme.spacing * 4}px;
		`,
	};

	return (
		<div css={styles.root}>
			<Container maxWidth={"lg"}>
				{children}
			</Container>
		</div>
	);
}
