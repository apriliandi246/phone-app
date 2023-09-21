/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { buttonRegular } from "../../../emotion-object-styles/form-groups";

interface Props {
	contacts: number[];
	openModal: (selectedContactID: number) => void;
}

function ContactListItems({ contacts, openModal }: Props) {
	const [itemSelected, setItemSelected] = useState<number>(-1);

	function toggleMenu(index: number) {
		if (index === itemSelected) {
			setItemSelected(-1);
		} else {
			setItemSelected(index);
		}
	}

	function showModalDeleteConfirmation(contactId: number) {
		openModal(contactId);
	}

	return (
		<div>
			{contacts.map((contact, index) => (
				<div key={contact} css={contactItem.self}>
					<button
						type="button"
						onClick={() => toggleMenu(index)}
						css={[buttonRegular, contactItem.button]}
						style={{
							borderBottomLeftRadius: itemSelected === index ? "0" : "inherit",
							borderBottomRightRadius: itemSelected === index ? "0" : "inherit"
						}}>
						<div css={contactItem.avatar}>f</div>

						<div css={contactItem.details}>
							<div css={contactItem.name}>Farhan Apriliandi</div>
							<div css={contactItem.phone}>+6281355531239</div>
						</div>

						<svg width="13" height="13" viewBox="0 0 46 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M38.52 2.16 23 17.68 7.48 2.16a3.983 3.983 0 0 0-5.64 0 3.983 3.983 0 0 0 0 5.64L20.2 26.16a3.983 3.983 0 0 0 5.64 0L44.2 7.8a3.983 3.983 0 0 0 0-5.64c-1.56-1.52-4.12-1.56-5.68 0Z"
								fill="var(--dim-gray)"
							/>
						</svg>
					</button>

					{itemSelected === index && (
						<div css={contactItem.menus}>
							<button css={contactItem.buttonMenu}>
								<svg width="18" height="18" viewBox="0 0 70 66" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="m65.6 22.16-19.36-1.68-7.56-17.8c-1.36-3.24-6-3.24-7.36 0l-7.56 17.84-19.32 1.64c-3.52.28-4.96 4.68-2.28 7l14.68 12.72-4.4 18.88c-.8 3.44 2.92 6.16 5.96 4.32l16.6-10 16.6 10.04c3.04 1.84 6.76-.88 5.96-4.32l-4.4-18.92 14.68-12.72c2.68-2.32 1.28-6.72-2.24-7ZM35 47.6l-15.04 9.08 4-17.12-13.28-11.52 17.52-1.52L35 10.4l6.84 16.16 17.52 1.52L46.08 39.6l4 17.12L35 47.6Z"
										fill="var(--dim-gray)"
									/>
								</svg>

								<span>Favorite</span>
							</button>

							<Link to={`/edit-contact/${contact}`} css={contactItem.buttonMenu}>
								<svg width="16" height="16" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0 58.84V71c0 1.12.88 2 2 2h12.16c.52 0 1.04-.2 1.4-.6l43.68-43.64-15-15L.6 57.4c-.4.4-.6.88-.6 1.44Zm70.84-41.68a3.983 3.983 0 0 0 0-5.64l-9.36-9.36a3.983 3.983 0 0 0-5.64 0l-7.32 7.32 15 15 7.32-7.32Z"
										fill="var(--dim-gray)"
									/>
								</svg>

								<span>Edit</span>
							</Link>

							<button css={contactItem.buttonMenu} onClick={() => showModalDeleteConfirmation(contact)}>
								<svg width="16" height="14" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M4 64c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V24c0-4.4-3.6-8-8-8H12c-4.4 0-8 3.6-8 8v40ZM52 4H42l-2.84-2.84A4.035 4.035 0 0 0 36.36 0H19.64c-1.04 0-2.08.44-2.8 1.16L14 4H4C1.8 4 0 5.8 0 8s1.8 4 4 4h48c2.2 0 4-1.8 4-4s-1.8-4-4-4Z"
										fill="var(--dim-gray)"
									/>
								</svg>

								<span>Delete</span>
							</button>
						</div>
					)}
				</div>
			))}
		</div>
	);
}

const contactItem = {
	self: css({
		borderRadius: "0.4rem",
		marginBottom: "1.2rem",
		border: "0.1rem solid var(--slate-gray)",

		"&:last-child": {
			marginBottom: "0"
		}
	}),

	button: css({
		width: "100%",
		border: "none",
		display: "grid",
		padding: "1rem 1.7rem",
		gridTemplateColumns: "repeat(12, 1fr)",

		svg: {
			justifySelf: "end",
			alignSelf: "center",
			gridColumn: "12 / 13"
		}
	}),

	details: css({
		textAlign: "left",
		alignSelf: "center",
		gridColumn: "2 / 11",
		marginLeft: "1.4rem"
	}),

	avatar: css({
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

	name: css({
		fontSize: "1.5rem",
		marginBottom: "0.6rem",
		color: "var(--dark-gray)"
	}),

	phone: css({
		fontSize: "1.4rem",
		color: "var(--dark-gray)"
	}),

	menus: css({
		display: "flex",
		alignItems: "center",
		paddingBlock: "1.3rem",
		paddingInline: "1.7rem",
		justifyContent: "space-around"
	}),

	buttonMenu: css({
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
			color: "var(--dim-gray)"
		}
	})
};

export default ContactListItems;
