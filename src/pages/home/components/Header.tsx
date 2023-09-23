/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";

function Header({ totalContacts }: { totalContacts: number }) {
	return (
		<header css={header.self}>
			<h1 css={header.title}>Contact List</h1>
			<div css={header.desc}>{totalContacts} contacts phone numbers</div>
		</header>
	);
}

const header = {
	self: css({
		marginTop: "2rem",
		textAlign: "center",
		color: "var(--dark-gray)"
	}),

	title: {
		fontWeight: "600",
		fontSize: "3.2rem"
	},

	desc: {
		fontSize: "1.1rem",
		color: "var(--dim-gray)"
	}
};

export default Header;
