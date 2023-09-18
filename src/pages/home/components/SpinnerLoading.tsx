/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/react/macro";

function SpinnerLoading() {
	return <div css={spinnerLoading.self}></div>;
}

const spinner = keyframes`
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
`;

const spinnerLoading = {
	self: css({
		width: "4rem",
		height: "4rem",
		borderRadius: "100%",
		marginInline: "auto",
		border: "0.5rem solid transparent",
		borderTopColor: "var(--border-color)",
		borderRightColor: "var(--border-color)",
		borderBottomColor: "var(--border-color)",
		animation: `${spinner} 800ms linear infinite`
	})
};

export default SpinnerLoading;
