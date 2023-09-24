/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";
import { Fragment, useState } from "react";

import { ContactListType, ContactDataType } from "../../../types/contact";
import { buttonRegular } from "../../../emotion-object-styles/form-groups";

interface Props {
	isLoading: boolean;
	contacts: ContactListType;
	categoryType: "all" | "favorite";
	onSetAllContacts: React.Dispatch<React.SetStateAction<ContactListType>>;
	onSetFavoriteContacts: React.Dispatch<React.SetStateAction<ContactListType>>;
	onOpenModalDeleteConfirmation: React.Dispatch<React.SetStateAction<{ isOpen: boolean; contactId: number }>>;
}

function CategoryContacts({
	contacts,
	isLoading,
	categoryType,
	onSetAllContacts,
	onSetFavoriteContacts,
	onOpenModalDeleteConfirmation
}: Props) {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [itemSelected, setItemSelected] = useState<number>(-1);

	const contactsPerPage: number = 10;
	const startIndex: number = (currentPage - 1) * contactsPerPage;
	const endIndex: number = startIndex + contactsPerPage;
	const totalPage: number = Math.ceil(contacts.length / contactsPerPage);
	const showNextButton: boolean = currentPage < totalPage;
	const currentContacts: ContactListType = contacts.slice(startIndex, endIndex);

	function toggleMenu(index: number) {
		if (index === itemSelected) {
			setItemSelected(-1);
		} else {
			setItemSelected(index);
		}
	}

	function showModalDeleteConfirmation(contactId: number) {
		onOpenModalDeleteConfirmation({ isOpen: true, contactId });
	}

	function handleToggleFavoriteContact(contact: ContactDataType) {
		const selectedContactId: number = contact.id;
		const allContacts: string | null = localStorage.getItem("allContacts");
		const favoriteContacts: string | null = localStorage.getItem("favoriteContacts");

		if (allContacts && favoriteContacts) {
			let allContactsFiletered;
			let favoriteContactsFiltered;

			const allContactsParsed: ContactListType = JSON.parse(allContacts);
			const favoriteContactsParsed: ContactListType = JSON.parse(favoriteContacts);

			if (categoryType === "all") {
				allContactsFiletered = allContactsParsed.filter((contact) => contact.id !== selectedContactId);
				favoriteContactsFiltered = [...favoriteContactsParsed, contact];

				onSetAllContacts(allContactsFiletered);
				onSetFavoriteContacts(favoriteContactsFiltered);
			}

			if (categoryType === "favorite") {
				favoriteContactsFiltered = favoriteContactsParsed.filter((contact) => contact.id !== selectedContactId);
				allContactsFiletered = [...allContactsParsed, contact];

				onSetAllContacts(allContactsFiletered);
				onSetFavoriteContacts(favoriteContactsFiltered);
			}

			localStorage.setItem("favoriteContacts", JSON.stringify(favoriteContactsFiltered));
			localStorage.setItem("allContacts", JSON.stringify(allContactsFiletered));
		}

		if (currentContacts.length === 1) {
			setCurrentPage(1);
		}
	}

	if (isLoading === false && contacts.length === 0) {
		return <div css={noContacts}>No Contacts</div>;
	}

	return (
		<Fragment>
			<div>
				{currentContacts.map((contact, index) => (
					<div key={contact.id} css={contactItem.self}>
						<button
							type="button"
							onClick={() => toggleMenu(contact.id)}
							css={[buttonRegular, contactItem.button]}
							style={{
								borderBottomLeftRadius: itemSelected === contact.id ? "0" : "inherit",
								borderBottomRightRadius: itemSelected === contact.id ? "0" : "inherit"
							}}>
							<div css={contactItem.avatar}>{contact.first_name[0]}</div>

							<div css={contactItem.details}>
								<div css={contactItem.name}>
									{contact.first_name} {contact.last_name}
								</div>
							</div>

							<svg width="13" height="13" viewBox="0 0 46 28" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M38.52 2.16 23 17.68 7.48 2.16a3.983 3.983 0 0 0-5.64 0 3.983 3.983 0 0 0 0 5.64L20.2 26.16a3.983 3.983 0 0 0 5.64 0L44.2 7.8a3.983 3.983 0 0 0 0-5.64c-1.56-1.52-4.12-1.56-5.68 0Z"
									fill="var(--dim-gray)"
								/>
							</svg>
						</button>

						{itemSelected === contact.id && (
							<div css={contactItem.content}>
								<div css={contactItem.phoneNumbers}>
									{contact.phones.map(
										(phone, index) =>
											phone.number.trim() !== "" && (
												<div key={index} css={contactItem.phone}>
													{phone.number}
												</div>
											)
									)}
								</div>

								<div css={contactItem.menus}>
									<button
										type="button"
										css={contactItem.buttonMenu}
										onClick={() => handleToggleFavoriteContact(contact)}>
										{categoryType === "all" && (
											<svg width="18" height="18" viewBox="0 0 70 66" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="m65.6 22.16-19.36-1.68-7.56-17.8c-1.36-3.24-6-3.24-7.36 0l-7.56 17.84-19.32 1.64c-3.52.28-4.96 4.68-2.28 7l14.68 12.72-4.4 18.88c-.8 3.44 2.92 6.16 5.96 4.32l16.6-10 16.6 10.04c3.04 1.84 6.76-.88 5.96-4.32l-4.4-18.92 14.68-12.72c2.68-2.32 1.28-6.72-2.24-7ZM35 47.6l-15.04 9.08 4-17.12-13.28-11.52 17.52-1.52L35 10.4l6.84 16.16 17.52 1.52L46.08 39.6l4 17.12L35 47.6Z"
													fill="var(--dim-gray)"
												/>
											</svg>
										)}

										{categoryType === "favorite" && (
											<svg width="18" height="18" viewBox="0 0 69 66" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M34.2278 54.79L50.8278 64.83C53.8678 66.67 57.5878 63.95 56.7878 60.51L52.3878 41.63L67.0678 28.91C69.7478 26.59 68.3078 22.19 64.7878 21.91L45.4678 20.27L37.9078 2.43C36.5478 -0.81 31.9078 -0.81 30.5478 2.43L22.9878 20.23L3.66783 21.87C0.14783 22.15 -1.29217 26.55 1.38783 28.87L16.0678 41.59L11.6678 60.47C10.8678 63.91 14.5878 66.63 17.6278 64.79L34.2278 54.79Z"
													fill="var(--dim-gray)"
												/>
											</svg>
										)}

										<span>Favorite</span>
									</button>

									<button
										type="button"
										css={contactItem.buttonMenu}
										onClick={() => showModalDeleteConfirmation(contact.id)}>
										<svg width="18" height="18" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M4 64c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V24c0-4.4-3.6-8-8-8H12c-4.4 0-8 3.6-8 8v40ZM52 4H42l-2.84-2.84A4.035 4.035 0 0 0 36.36 0H19.64c-1.04 0-2.08.44-2.8 1.16L14 4H4C1.8 4 0 5.8 0 8s1.8 4 4 4h48c2.2 0 4-1.8 4-4s-1.8-4-4-4Z"
												fill="var(--dim-gray)"
											/>
										</svg>

										<span>Delete</span>
									</button>
								</div>
							</div>
						)}
					</div>
				))}
			</div>

			<nav css={paginatioNav.self}>
				{currentPage !== 1 && (
					<button type="button" css={buttonRegular} onClick={() => setCurrentPage((prevState) => prevState - 1)}>
						Prev
					</button>
				)}

				{showNextButton && (
					<button type="button" css={buttonRegular} onClick={() => setCurrentPage((prevState) => prevState + 1)}>
						Next
					</button>
				)}
			</nav>
		</Fragment>
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
		padding: "0.8rem 1.7rem",
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
		fontWeight: "500",
		fontSize: "1.5rem",
		color: "var(--dark-gray)"
	}),

	phone: css({
		fontSize: "1.5rem",
		marginBottom: "0.1rem",
		color: "var(--dark-gray)",

		"&:last-child": {
			marginBottom: "0"
		}
	}),

	content: css({
		paddingBottom: "1.3rem"
	}),

	menus: css({
		gap: "4rem",
		display: "flex",
		alignItems: "center",
		paddingInline: "1.7rem",
		justifyContent: "center"
	}),

	phoneNumbers: css({
		marginTop: "1rem",
		marginLeft: "6.9rem",
		marginBottom: "1.8rem"
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

const noContacts = css({
	fontSize: "1.4rem",
	textAlign: "center",
	marginTop: "6.7rem"
});

const paginatioNav = {
	self: css({
		gap: "2rem",
		display: "flex",
		marginTop: "2rem",
		alignItems: "center",
		justifyContent: "center"
	})
};

export default CategoryContacts;
