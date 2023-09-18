/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";
import { Link } from "react-router-dom";

function SearchContact() {
	return (
		<div css={searchContactSection.self}>
			<div css={searchContactSection.inputSearchWrapper}>
				<div css={searchContactSection.searchIcon}>
					<svg fill="none" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M13 9.03a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm.192 5.606a7 7 0 1 1 1.414-1.414l1.101 1.1-1.414 1.415-1.1-1.101Z"
							fill="#989898"></path>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M20.527 20.61a2 2 0 0 1-2.8.027l-3.259-3.194a2 2 0 1 1 2.774-2.881l3.258 3.194a2 2 0 0 1 .027 2.855Z"
							fill="#989898"></path>
					</svg>
				</div>

				<input css={searchContactSection.inputSearch} type="text" placeholder="Search contact name" />

				<button css={searchContactSection.buttonClearSearch}>
					<svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M19.071 4.929c3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142 3.905-3.906 10.237-3.906 14.142 0Zm-7.031 5.147L10.175 8.21c-.35-.35-.717-.53-1.1-.54a1.33 1.33 0 0 0-1.008.418c-.288.287-.424.62-.41 1 .02.374.223.755.612 1.144l1.807 1.807-1.865 1.865c-.35.35-.53.717-.54 1.1-.01.384.13.72.418 1.008.288.287.62.424 1 .41.374-.02.755-.223 1.144-.612l1.807-1.807 1.786 1.786c.383.383.767.59 1.15.618a1.27 1.27 0 0 0 1.015-.396c.288-.287.425-.625.41-1.014-.014-.388-.218-.78-.611-1.173l-1.786-1.785 1.786-1.786c.383-.383.59-.767.619-1.15a1.27 1.27 0 0 0-.396-1.015 1.315 1.315 0 0 0-1.015-.41c-.388.014-.78.218-1.172.611l-1.786 1.786Z"
							fill="#989898"></path>
					</svg>
				</button>
			</div>

			<div css={searchContactSection.newContactNavigate}>
				<Link to="/new-contact">
					<svg width="19" height="19" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
						<path
							d="M52 32H32V52C32 54.2 30.2 56 28 56C25.8 56 24 54.2 24 52V32H4C1.8 32 0 30.2 0 28C0 25.8 1.8 24 4 24H24V4C24 1.8 25.8 0 28 0C30.2 0 32 1.8 32 4V24H52C54.2 24 56 25.8 56 28C56 30.2 54.2 32 52 32Z"
							fill="#989898"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
}

const searchContactSection = {
	self: css({
		gap: "1rem",
		display: "grid",
		marginBottom: "3rem",
		gridTemplateColumns: "repeat(12, 1fr)",

		"@media (max-width: 600px)": {
			gap: "0"
		}
	}),

	inputSearchWrapper: css({
		position: "relative",
		gridColumn: "span 11",

		"@media (max-width: 600px)": {
			marginRight: "1rem"
		}
	}),

	searchIcon: css({
		top: "0",
		left: "0",
		bottom: "0",
		display: "flex",
		alignItems: "center",
		marginLeft: "1.7rem",
		position: "absolute",
		justifyContent: "center"
	}),

	inputSearch: css({
		width: "100%",
		border: "none",
		color: "#5c5959",
		fontSize: "1.5rem",
		padding: "1rem 4.3rem",
		borderRadius: "1.9rem",
		backgroundColor: "#f2f3f4"
	}),

	newContactNavigate: css({
		cursor: "pointer",
		justifySelf: "end",
		alignSelf: "center",
		gridColumn: "12 / 13",

		svg: {
			display: "block"
		}
	}),

	buttonClearSearch: css({
		top: "0",
		right: "0",
		bottom: "0",
		border: "none",
		position: "absolute",
		width: "fit-content",
		marginRight: "1.7rem",
		backgroundColor: "transparent",

		":hover": {
			backgroundColor: "transparent"
		},

		svg: {
			display: "block",
			pointerEvents: "none"
		}
	})
};

export default SearchContact;
