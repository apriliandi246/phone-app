/** @jsxRuntime classic */
/** @jsx jsx */
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/react/macro";

import { buttonRegular } from "../../emotion-object-styles/form-groups";

function Page() {
	return (
		<div css={container.self}>
			<h1 css={container.title}>Page Not Found</h1>

			<Link to="/" css={[container.linkBack, buttonRegular]}>
				Back
			</Link>
		</div>
	);
}

const container = {
	self: css({
		textAlign: "center"
	}),

	title: css({
		fontWeight: "600",
		fontSize: "3.1rem",
		marginBottom: "4rem"
	}),

	linkBack: css({
		textDecoration: "none"
	})
};

export default Page;
