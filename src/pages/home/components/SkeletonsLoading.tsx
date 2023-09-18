/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";

function SkeletonsLoading() {
	return (
		<div>
			<div css={skeletonsLoading.item}></div>
			<div css={skeletonsLoading.item}></div>
			<div css={skeletonsLoading.item}></div>
			<div css={skeletonsLoading.item}></div>
			<div css={skeletonsLoading.item}></div>
		</div>
	);
}

const skeletonsLoading = {
	item: css({
		width: "100%",
		height: "12rem",
		marginBottom: "1.2rem",
		borderRadius: "0.4rem",
		backgroundColor: "rgba(0, 0, 0, 0.11)"
	})
};

export default SkeletonsLoading;
