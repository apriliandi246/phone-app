/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/react/macro";

function SkeletonsLoading() {
	return (
		<div>
			<div css={skeleton.item}></div>
			<div css={skeleton.item}></div>
			<div css={skeleton.item}></div>
			<div css={skeleton.item}></div>
			<div css={skeleton.item}></div>
			<div css={skeleton.item}></div>
		</div>
	);
}

const skeletonAnimation = keyframes`
	0% {
		opacity: 1;
	}

	50% {
		opacity: 0.5;
	}

	100% {
		opacity: 1;
	}
`;

const skeleton = {
	item: css({
		width: "100%",
		height: "12rem",
		marginBottom: "1.2rem",
		borderRadius: "0.4rem",
		backgroundColor: "rgba(0, 0, 0, 0.11)",
		animation: `${skeletonAnimation} 1.5s ease-in-out 0.5s infinite`
	})
};

export default SkeletonsLoading;
