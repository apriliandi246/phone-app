/** @jsxRuntime classic */
/** @jsx jsx */
import { Fragment, useEffect } from "react";
import { jsx, css } from "@emotion/react/macro";

import HeaderTitleNavigation from "../../components/HeaderTitleNavigation";

import {
	formWrapper,
	inputBase,
	buttonRegular,
	inputUserIcon,
	inputPhoneIcon
} from "../../emotion-object-styles/form-groups";

function Page() {
	useEffect(() => {
		document.title = "Phone App - Edit Contact";

		return () => {
			document.title = "Phone App";
		};
	}, []);

	return (
		<Fragment>
			<HeaderTitleNavigation title="Edit Contact" />

			<form css={formWrapper}>
				<input type="text" placeholder="Name" css={[inputBase, inputUserIcon]} />
				<input type="text" placeholder="Phone" css={[inputBase, inputPhoneIcon]} />

				<button type="submit" css={[buttonRegular, btnSubmit]}>
					Save
				</button>
			</form>
		</Fragment>
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
		color: "var(--dark-gray)"
	})
};

const btnSubmit = css({
	width: "100%"
});

export default Page;
