/** @jsxRuntime classic */
/** @jsx jsx */
import { useLazyQuery } from "@apollo/client";
import { jsx, css } from "@emotion/react/macro";
import { Fragment, useEffect, useState } from "react";

import Tab from "./components/Tab";
import Menus from "./components/Menus";
import Header from "./components/Header";
import ModalNotify from "../../components/ModalNotify";
import CategoryContact from "./components/CategoryContact";
import SkeletonsLoading from "./components/SkeletonsLoading";
import ModalDeleteConfirmation from "./components/ModalDeleteConfirmation";

import { ContactListType } from "../../types/contact";
import { GET_CONTACT_LIST } from "./grapql-queries/queries";

function Page() {
	const [loadContactList, { loading, data }] = useLazyQuery(GET_CONTACT_LIST);

	const [contactTab, setContactTab] = useState("all");
	const [contacts, setContacts] = useState<ContactListType>([]);
	const [isContactDeleted, setContactDeleted] = useState<boolean>(false);
	const [isContactDeleting, setContactDeleting] = useState<boolean>(false);
	const [favoriteContacts, setFavoriteContacts] = useState<ContactListType>([]);
	const [modalContactSelected, setModalContactSelected] = useState<{ isOpen: boolean; contactId: number }>({
		isOpen: false,
		contactId: -1
	});

	useEffect(() => {
		const allContacts: string | null = localStorage.getItem("allContacts");

		if (allContacts === null) {
			loadContactList();
		} else {
			const allContactsParsed: ContactListType = JSON.parse(allContacts);
			setContacts(allContactsParsed);
		}
	}, []);

	useEffect(() => {
		const favoriteContacts: string | null = localStorage.getItem("favoriteContacts");

		if (favoriteContacts !== null) {
			const contactListParsed: ContactListType = JSON.parse(favoriteContacts);
			setFavoriteContacts(contactListParsed);
		} else {
			localStorage.setItem("favoriteContacts", "[]");
		}
	}, []);

	useEffect(() => {
		if (loading === false && data !== undefined) {
			const allContacts: string = JSON.stringify(data.contact);

			setContacts(data.contact);
			localStorage.setItem("allContacts", allContacts);
		}
	}, [loading]);

	useEffect(() => {
		if (isContactDeleted === true) {
			const allContacts: string | null = localStorage.getItem("allContacts");

			if (allContacts !== null) {
				const allContactsParsed: ContactListType = JSON.parse(allContacts);
				setContacts(allContactsParsed);
			}
		}
	}, [isContactDeleted]);

	function closeModalDeleteNotify() {
		setContactDeleted(false);
	}

	return (
		<Fragment>
			<div css={mainContainer.self}>
				<Header totalContacts={contacts.length + favoriteContacts.length} />

				<Menus />

				<Tab activeTab={contactTab} onChangeTab={setContactTab} />

				{loading === true && <SkeletonsLoading />}

				{contactTab === "all" && (
					<CategoryContact
						categoryType="all"
						isLoading={loading}
						contacts={contacts}
						onSetAllContacts={setContacts}
						onSetFavoriteContacts={setFavoriteContacts}
						onOpenModalDeleteConfirmation={setModalContactSelected}
					/>
				)}

				{contactTab === "favorite" && (
					<CategoryContact
						isLoading={loading}
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
					isDeleting={isContactDeleting}
					onDeleting={setContactDeleting}
					onClose={setModalContactSelected}
					onContactDeleted={setContactDeleted}
					contactId={modalContactSelected.contactId}
				/>
			)}

			{isContactDeleted === true && (
				<ModalNotify title="Contact Deleted" message="Contact successfully deleted" onClose={closeModalDeleteNotify} />
			)}
		</Fragment>
	);
}

const mainContainer = {
	self: css({
		width: "100%"
	})
};

export default Page;
