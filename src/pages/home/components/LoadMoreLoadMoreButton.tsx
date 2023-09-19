/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";

import { buttonRegular } from "../../../object-styles/form-groups";

function LoadMoreButton() {
	return (
		<div css={loadMoreSection.self}>
			<button type="button" css={[buttonRegular, loadMoreSection.button]}>
				<div>Load more</div>

				<svg width="13" height="13" viewBox="0 0 46 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M38.52 2.16 23 17.68 7.48 2.16a3.983 3.983 0 0 0-5.64 0 3.983 3.983 0 0 0 0 5.64L20.2 26.16a3.983 3.983 0 0 0 5.64 0L44.2 7.8a3.983 3.983 0 0 0 0-5.64c-1.56-1.52-4.12-1.56-5.68 0Z"
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
		justifyContent: "center",

		div: {
			fontSize: "inherit"
		},

		svg: {
			display: "block",
			pointerEvents: "none"
		}
	})
};

export default LoadMoreButton;
