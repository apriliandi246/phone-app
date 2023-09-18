/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";

function LoadMoreButton() {
	return (
		<div css={loadMoreSection.self}>
			<button type="button" css={loadMoreSection.button}>
				<div>Load more</div>

				<svg width="13" height="13" viewBox="0 0 46 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M38.52 2.15999L23 17.68L7.48004 2.15999C5.92004 0.59999 3.40004 0.59999 1.84004 2.15999C0.280044 3.71999 0.280044 6.23999 1.84004 7.79999L20.2 26.16C21.76 27.72 24.28 27.72 25.84 26.16L44.2 7.79999C45.76 6.23999 45.76 3.71999 44.2 2.15999C42.64 0.63999 40.08 0.59999 38.52 2.15999Z"
						fill="#6a6a6a"
					/>
				</svg>
			</button>
		</div>
	);
}

const loadMoreSection = {
	self: css({
		width: "100%",
		display: "grid",
		marginTop: "3.8rem",
		placeItems: "center"
	}),

	button: css({
		gap: "1rem",
		display: "flex",
		alignItems: "center",
		width: "fit-content",
		borderRadius: "0.4rem",
		backgroundColor: "#fff",
		padding: "0.8rem 1.4rem",
		justifyContent: "center",
		border: "0.1rem solid #9ca3af",
		transition: "background-color 100ms",

		div: {
			fontSize: "1.4rem"
		},

		svg: {
			display: "block",
			pointerEvents: "none"
		}
	})
};

export default LoadMoreButton;
