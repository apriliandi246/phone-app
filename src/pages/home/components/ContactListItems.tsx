/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";
import { Link } from "react-router-dom";
import { useState } from "react";

function ContactListItems() {
	const [contacts, setContact] = useState([1, 2, 3, 4, 5]);

	return (
		<div>
			{contacts.map((contact) => (
				<div key={contact} css={contactListItem.contactItem}>
					<button type="button" css={contactListItem.contactItemBtn}>
						<div css={contactListItem.contactItemAvatar}>f</div>

						<div css={contactListItem.contactItemData}>
							<div css={contactListItem.contactItemName}>Farhan Apriliandi</div>
							<div css={contactListItem.contactItemNumber}>+6281355531239</div>
						</div>

						<svg width="13" height="13" viewBox="0 0 46 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M38.52 2.15999L23 17.68L7.48004 2.15999C5.92004 0.59999 3.40004 0.59999 1.84004 2.15999C0.280044 3.71999 0.280044 6.23999 1.84004 7.79999L20.2 26.16C21.76 27.72 24.28 27.72 25.84 26.16L44.2 7.79999C45.76 6.23999 45.76 3.71999 44.2 2.15999C42.64 0.63999 40.08 0.59999 38.52 2.15999Z"
								fill="#6a6a6a"
							/>
						</svg>
					</button>

					<div css={contactListItem.contactItemMenus}>
						<button css={contactListItem.contactItemMenu}>
							<svg width="18" height="18" viewBox="0 0 70 66" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M65.6 22.16L46.24 20.48L38.68 2.68C37.32 -0.56 32.68 -0.56 31.32 2.68L23.76 20.52L4.43999 22.16C0.919986 22.44 -0.520015 26.84 2.15999 29.16L16.84 41.88L12.44 60.76C11.64 64.2 15.36 66.92 18.4 65.08L35 55.08L51.6 65.12C54.64 66.96 58.36 64.24 57.56 60.8L53.16 41.88L67.84 29.16C70.52 26.84 69.12 22.44 65.6 22.16ZM35 47.6L19.96 56.68L23.96 39.56L10.68 28.04L28.2 26.52L35 10.4L41.84 26.56L59.36 28.08L46.08 39.6L50.08 56.72L35 47.6Z"
									fill="#6a6a6a"
								/>
							</svg>

							<span>Favorite</span>
						</button>

						<Link to="/edit-contact" css={contactListItem.contactItemMenu}>
							<svg width="16" height="16" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M0 58.84V71C0 72.12 0.88 73 2 73H14.16C14.68 73 15.2 72.8 15.56 72.4L59.24 28.76L44.24 13.76L0.6 57.4C0.2 57.8 0 58.28 0 58.84ZM70.84 17.16C72.4 15.6 72.4 13.08 70.84 11.52L61.48 2.15999C59.92 0.59999 57.4 0.59999 55.84 2.15999L48.52 9.47999L63.52 24.48L70.84 17.16Z"
									fill="#6a6a6a"
								/>
							</svg>

							<span>Edit</span>
						</Link>

						<button css={contactListItem.contactItemMenu}>
							<svg width="16" height="14" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M4 64C4 68.4 7.6 72 12 72H44C48.4 72 52 68.4 52 64V24C52 19.6 48.4 16 44 16H12C7.6 16 4 19.6 4 24V64ZM52 4H42L39.16 1.16C38.44 0.44 37.4 0 36.36 0H19.64C18.6 0 17.56 0.44 16.84 1.16L14 4H4C1.8 4 0 5.8 0 8C0 10.2 1.8 12 4 12H52C54.2 12 56 10.2 56 8C56 5.8 54.2 4 52 4Z"
									fill="#6a6a6a"
								/>
							</svg>

							<span>Delete</span>
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

const contactListItem = {
	contactItem: css({
		borderRadius: "0.4rem",
		marginBottom: "1.2rem",
		border: "0.1rem solid var(--border-color)",

		"&:last-child": {
			marginBottom: "0"
		}
	}),

	contactItemBtn: css({
		width: "100%",
		border: "none",
		display: "grid",
		padding: "1rem 1.7rem",
		backgroundColor: "transparent",
		borderTopLeftRadius: "0.4rem",
		borderTopRightRadius: "0.4rem",
		gridTemplateColumns: "repeat(12, 1fr)",

		svg: {
			justifySelf: "end",
			alignSelf: "center",
			gridColumn: "12 / 13"
		}
	}),

	contactItemData: css({
		textAlign: "left",
		alignSelf: "center",
		gridColumn: "2 / 11",
		marginLeft: "1.4rem"
	}),

	contactItemAvatar: css({
		color: "#fff",
		display: "flex",
		width: "3.8rem",
		height: "3.8rem",
		fontSize: "1.5rem",
		alignSelf: "center",
		gridColumn: "1 / 2",
		borderRadius: "100%",
		alignItems: "center",
		justifyContent: "center",
		textTransform: "uppercase",
		backgroundColor: "#6a6a6a"
	}),

	contactItemName: css({
		fontSize: "1.4rem",
		marginBottom: "0.1rem",
		color: "var(--primary-text-color)"
	}),

	contactItemNumber: css({
		fontSize: "1.3rem",
		color: "var(--primary-text-color)"
	}),

	contactItemMenus: css({
		display: "flex",
		marginTop: "1rem",
		alignItems: "center",
		paddingBottom: "1rem",
		paddingInline: "1.7rem",
		justifyContent: "space-around"
	}),

	contactItemMenu: css({
		border: "none",
		display: "flex",
		alignItems: "center",
		textDecoration: "none",
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: "transparent",

		":hover": {
			backgroundColor: "transparent"
		},

		":active": {
			backgroundColor: "transparent"
		},

		svg: {
			display: "block",
			pointerEvents: "none"
		},

		span: {
			fontSize: "1.2rem",
			marginTop: "0.4rem",
			color: "var(--secondary-text-color)"
		}
	})
};

export default ContactListItems;
