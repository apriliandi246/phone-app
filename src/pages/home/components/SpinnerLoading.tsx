/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/react/macro";

function SpinnerLoading() {
	return <div css={spinner.self}></div>;
}

const spinnerAnimation = keyframes`
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
`;

const spinner = {
	self: css({
		width: "4rem",
		height: "4rem",
		borderRadius: "100%",
		marginInline: "auto",
		border: "0.5rem solid transparent",
		borderTopColor: "#6a6a6a",
		borderRightColor: "#6a6a6a",
		borderBottomColor: "#6a6a6a",
		animation: `${spinnerAnimation} 800ms linear infinite`
	})
};

export default SpinnerLoading;
