import { css, Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

const reset = css`
  ${emotionNormalize}
  * {
    font-family: 'Noto Sans KR', 'Roboto', sans-serif;
  }
  body {
	background-color: #F5F6FA;
  }
`;

export default function CssReset() {
	return (
		<Global styles={reset} />
	);
}
