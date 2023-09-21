/** @jsxRuntime classic */
/** @jsx jsx */
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { jsx, css, keyframes } from "@emotion/react/macro";

import SpinnerLoading from "./components/SpinnerLoading";
import ContactListItems from "./components/ContactListItems";
import LoadMoreButton from "./components/LoadMoreLoadMoreButton";
import ModalDeleteConfirmation from "./components/ModalDeleteConfirmation";

function Page() {
	const [contacts, setContacts] = useState<number[]>([1, 2, 3, 4, 5]);
	const [isModalDeleteOpen, setModalDeleteOpenStatus] = useState<boolean>(false);
	const [contactIDModalSelected, setContactIDModalSelected] = useState<number>(-1);

	function deleteContact() {
		console.log("Delete contact with ID: ", contactIDModalSelected);
	}

	function openModalDeleteConfirmation() {
		setModalDeleteOpenStatus(true);
	}

	function closeModalDeleteConfirmation() {
		setModalDeleteOpenStatus(false);
	}

	return (
		<Fragment>
			{isModalDeleteOpen === true && (
				<ModalDeleteConfirmation onDelete={deleteContact} onClose={closeModalDeleteConfirmation} />
			)}

			<div css={mainContainer.self}>
				<header css={header.self}>
					<h1 css={header.title}>Contact List</h1>
					<div css={header.desc}>24 contacts with phone numbers</div>
				</header>

				<div css={menus.self}>
					<Link to="/new-contact" css={menus.menuItem}>
						<svg width="19" height="19" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M52 32H32v20c0 2.2-1.8 4-4 4s-4-1.8-4-4V32H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h20V4c0-2.2 1.8-4 4-4s4 1.8 4 4v20h20c2.2 0 4 1.8 4 4s-1.8 4-4 4Z"
								fill="var(--dim-gray)"
							/>
						</svg>

						<span>Add</span>
					</Link>

					<Link to="/search-contact" css={menus.menuItem}>
						<svg width="19" height="19" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M51 45h-3.16l-1.12-1.08c4.8-5.6 7.28-13.24 5.92-21.36-1.88-11.12-11.16-20-22.36-21.36C13.36-.88-.88 13.36 1.2 30.28c1.36 11.2 10.24 20.48 21.36 22.36 8.12 1.36 15.76-1.12 21.36-5.92L45 47.84V51l17 17a4.225 4.225 0 0 0 5.96 0 4.225 4.225 0 0 0 0-5.96L51 45Zm-24 0c-9.96 0-18-8.04-18-18S17.04 9 27 9s18 8.04 18 18-8.04 18-18 18Z"
								fill="var(--dim-gray)"
							/>
						</svg>

						<span>Search</span>
					</Link>
				</div>

				{/* Favorites contact */}
				<div css={contactCategory.self}>
					<div css={contactCategory.header}>
						<svg width="16" height="16" viewBox="0 0 69 66" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="m34.228 54.79 16.6 10.04c3.04 1.84 6.76-.88 5.96-4.32l-4.4-18.88 14.68-12.72c2.68-2.32 1.24-6.72-2.28-7l-19.32-1.64-7.56-17.84c-1.36-3.24-6-3.24-7.36 0l-7.56 17.8-19.32 1.64c-3.52.28-4.96 4.68-2.28 7l14.68 12.72-4.4 18.88c-.8 3.44 2.92 6.16 5.96 4.32l16.6-10Z"
								fill="var(--dim-gray)"
							/>
						</svg>

						<div css={contactCategory.title}>Favorites</div>
					</div>

					<ContactListItems
						contacts={contacts}
						openModal={openModalDeleteConfirmation}
						setContactIDModalSelected={setContactIDModalSelected}
					/>
				</div>

				{/* All contact */}
				<div css={contactCategory.self}>
					<div css={contactCategory.header}>
						<svg width="16" height="16" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M0 8v56c0 4.4 3.56 8 8 8h56c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H8C3.56 0 0 3.6 0 8Zm48 16c0 6.64-5.36 12-12 12s-12-5.36-12-12 5.36-12 12-12 12 5.36 12 12ZM12 56c0-8 16-12.4 24-12.4S60 48 60 56v4H12v-4Z"
								fill="var(--dim-gray)"
							/>
						</svg>

						<div css={contactCategory.title}>All</div>
					</div>

					<ContactListItems
						contacts={contacts}
						openModal={openModalDeleteConfirmation}
						setContactIDModalSelected={setContactIDModalSelected}
					/>
				</div>

				<LoadMoreButton />
				<br />
				<SpinnerLoading />
			</div>
		</Fragment>
	);
}

const mainContainer = {
	self: css({
		width: "100%"
	})
};

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

const menus = {
	self: css({
		gap: "2rem",
		display: "flex",
		marginTop: "4rem",
		alignItems: "center",
		marginBottom: "1rem",
		justifyContent: "flex-end"
	}),

	menuItem: css({
		gap: "0.5rem",
		display: "flex",
		fontSize: "1.2rem",
		alignItems: "center",
		textDecoration: "none",
		flexDirection: "column",
		color: "var(--dark-gray)"
	})
};

const contactCategory = {
	self: css({
		marginBottom: "3rem"
	}),

	header: css({
		gap: "1rem",
		display: "flex",
		alignItems: "center",
		marginBottom: "1.6rem"
	}),

	title: css({
		fontSize: "1.5rem",
		color: "var(--dark-gray)"
	})
};

export default Page;
