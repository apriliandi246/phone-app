/** @jsxRuntime classic */
/** @jsx jsx */
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/react/macro";
import { Fragment, useEffect, useState } from "react";

import Tab from "./components/Tab";
import ModalNotify from "../../components/ModalNotify";
import ContactListItems from "./components/ContactListItems";
import ModalDeleteConfirmation from "./components/ModalDeleteConfirmation";

function Page() {
	// example data
	const [contacts, setContacts] = useState<number[]>([1, 2, 3, 4, 5]);

	const [contactTab, setContactTab] = useState("all");
	const [isContactDeleted, setContactDeleted] = useState<boolean>(false);
	const [isContactDeleting, setContactDeleting] = useState<boolean>(false);
	const [modalContactSelected, setModalContactSelected] = useState<{ isOpen: boolean; contactID: number }>({
		isOpen: false,
		contactID: -1
	});

	useEffect(() => {
		let timer: any;

		if (modalContactSelected.contactID !== -1 && isContactDeleting === true) {
			timer = setTimeout(() => {
				console.log("Delete contact with ID: ", modalContactSelected.contactID);

				setModalContactSelected({ isOpen: false, contactID: -1 });
				setContactDeleting(false);
				setContactDeleted(true);
			}, 2500);
		}

		return () => {
			clearTimeout(timer);
		};
	}, [isContactDeleting]);

	function deleteContact() {
		setContactDeleting(true);
	}

	function openModalDeleteConfirmation(selectedContactID: number) {
		setModalContactSelected({ isOpen: true, contactID: selectedContactID });
	}

	function closeModalDeleteConfirmation() {
		setModalContactSelected({ ...modalContactSelected, isOpen: false });
	}

	function closeModalDeleteNotify() {
		setContactDeleted(false);
	}

	return (
		<Fragment>
			<div css={mainContainer.self}>
				<header css={header.self}>
					<h1 css={header.title}>Contact List</h1>
					<div css={header.desc}>24 contacts with phone numbers</div>
				</header>

				<div css={menus.self}>
					<Link to="/search-contact" css={menus.menuItem}>
						<svg width="19" height="19" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M51 45h-3.16l-1.12-1.08c4.8-5.6 7.28-13.24 5.92-21.36-1.88-11.12-11.16-20-22.36-21.36C13.36-.88-.88 13.36 1.2 30.28c1.36 11.2 10.24 20.48 21.36 22.36 8.12 1.36 15.76-1.12 21.36-5.92L45 47.84V51l17 17a4.225 4.225 0 0 0 5.96 0 4.225 4.225 0 0 0 0-5.96L51 45Zm-24 0c-9.96 0-18-8.04-18-18S17.04 9 27 9s18 8.04 18 18-8.04 18-18 18Z"
								fill="var(--dim-gray)"
							/>
						</svg>

						<span>Search</span>
					</Link>

					<Link to="/new-contact" css={menus.menuItem}>
						<svg width="19" height="19" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M52 32H32v20c0 2.2-1.8 4-4 4s-4-1.8-4-4V32H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h20V4c0-2.2 1.8-4 4-4s4 1.8 4 4v20h20c2.2 0 4 1.8 4 4s-1.8 4-4 4Z"
								fill="var(--dim-gray)"
							/>
						</svg>

						<span>Add</span>
					</Link>
				</div>

				<Tab activeTab={contactTab} onChangeTab={setContactTab} />

				{/* Favorites contact */}
				{contactTab === "favorite" && <ContactListItems contacts={contacts} openModal={openModalDeleteConfirmation} />}

				{/* All contact */}
				{contactTab === "all" && <ContactListItems contacts={contacts} openModal={openModalDeleteConfirmation} />}
			</div>

			{isContactDeleted === true && <ModalNotify onClose={closeModalDeleteNotify} />}

			{modalContactSelected.isOpen === true && (
				<ModalDeleteConfirmation
					isDeleting={isContactDeleting}
					onDelete={deleteContact}
					onClose={closeModalDeleteConfirmation}
				/>
			)}
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
		gap: "3rem",
		display: "flex",
		marginTop: "3rem",
		alignItems: "center",
		marginBottom: "1rem",
		justifyContent: "center"
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

export default Page;
