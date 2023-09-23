/** @jsxRuntime classic */
/** @jsx jsx */
import { Link } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { jsx, css } from "@emotion/react/macro";
import { Fragment, useEffect, useState } from "react";

import Tab from "./components/Tab";
import Menus from "./components/Menus";
import Header from "./components/Header";
import ModalNotify from "../../components/ModalNotify";
import CategoryContact from "./components/CategoryContact";
import SkeletonsLoading from "../../components/SkeletonsLoading";
import ModalDeleteConfirmation from "./components/ModalDeleteConfirmation";

import { ContactType } from "./types/contactList";
import { GET_CONTACT_LIST } from "./grapql-queries/queries";

function Page() {
	const [loadContactList, { loading, data, error }] = useLazyQuery(GET_CONTACT_LIST);
	const [contactTab, setContactTab] = useState("all");
	const [contacts, setContacts] = useState<ContactType>([]);
	const [isContactDeleted, setContactDeleted] = useState<boolean>(false);
	const [isContactDeleting, setContactDeleting] = useState<boolean>(false);
	const [favoriteContacts, setFavoriteContacts] = useState<ContactType>([]);
	const [modalContactSelected, setModalContactSelected] = useState<{ isOpen: boolean; contactId: number }>({
		isOpen: false,
		contactId: -1
	});

	useEffect(() => {
		const contacts = localStorage.getItem("contacts");

		if (contacts === null) {
			loadContactList();
		} else {
			const contactList = JSON.parse(contacts);
			setContacts(contactList);
		}
	}, []);

	useEffect(() => {
		if (loading === false && data !== undefined) {
			const contacts = JSON.stringify(data.contact);

			setContacts(data.contact);
			localStorage.setItem("contacts", contacts);
		}
	}, [loading]);

	useEffect(() => {
		let timer: any;

		if (modalContactSelected.contactId !== -1 && isContactDeleting === true) {
			timer = setTimeout(() => {
				console.log("Delete contact with ID: ", modalContactSelected.contactId);

				setModalContactSelected({ isOpen: false, contactId: -1 });
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

	function closeModalDeleteNotify() {
		setContactDeleted(false);
	}

	return (
		<Fragment>
			<div css={mainContainer.self}>
				<Header totalContacts={contacts.length} />

				<Menus />

				<Tab activeTab={contactTab} onChangeTab={setContactTab} />

				{loading === true && <SkeletonsLoading />}

				{contactTab === "all" && (
					<CategoryContact
						categoryType="all"
						contacts={contacts}
						onSetAllContacts={setContacts}
						onSetFavoriteContacts={setFavoriteContacts}
						onOpenModalDeleteConfirmation={setModalContactSelected}
					/>
				)}

				{contactTab === "favorite" && (
					<CategoryContact
						categoryType="favorite"
						contacts={favoriteContacts}
						onSetAllContacts={setContacts}
						onSetFavoriteContacts={setFavoriteContacts}
						onOpenModalDeleteConfirmation={setModalContactSelected}
					/>
				)}
			</div>

			{modalContactSelected.isOpen === true && (
				<ModalDeleteConfirmation
					onDelete={deleteContact}
					isDeleting={isContactDeleting}
					onClose={setModalContactSelected}
				/>
			)}

			{isContactDeleted === true && <ModalNotify onClose={closeModalDeleteNotify} />}
		</Fragment>
	);
}

const mainContainer = {
	self: css({
		width: "100%"
	})
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
