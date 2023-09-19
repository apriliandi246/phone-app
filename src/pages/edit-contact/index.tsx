/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";
import { Link } from "react-router-dom";

import { formWrapper, inputBase, buttonRegular, inputUserIcon, inputPhoneIcon } from "../../object-styles/form-groups";

function Page() {
	return (
		<div>
			<header css={header.self}>
				<Link to="/" css={header.back}>
					<svg width="13" height="23" viewBox="0 0 28 46" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M25.84 38.52 10.32 23 25.84 7.48a3.983 3.983 0 0 0 0-5.64 3.983 3.983 0 0 0-5.64 0L1.84 20.2a3.983 3.983 0 0 0 0 5.64L20.2 44.2a3.983 3.983 0 0 0 5.64 0c1.52-1.56 1.56-4.12 0-5.68Z"
							fill="#6a6a6a"
						/>
					</svg>
				</Link>

				<div css={header.title}>Edit Contact</div>
			</header>

			<form css={formWrapper}>
				<input type="text" placeholder="Name" css={[inputBase, inputUserIcon]} />
				<input type="text" placeholder="Phone" css={[inputBase, inputPhoneIcon]} />

				<button type="submit" css={[buttonRegular, btnSubmit]}>
					Save
				</button>
			</form>
		</div>
	);
}

const header = {
	self: css({
		display: "flex",
		columnGap: "1.7rem",
		alignItems: "center"
	}),

	back: css({
		display: "grid",
		placeItems: "center"
	}),

	title: css({
		fontWeight: "600",
		fontSize: "1.6rem",
		color: "var(--primary-text-color)"
	})
};

const btnSubmit = css({
	width: "100%"
});

export default Page;
