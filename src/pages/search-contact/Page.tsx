import { useLazyQuery } from "@apollo/client";
import { Fragment, useState, useEffect } from "react";

import ContactList from "./components/ContactList";
import SearchContact from "./components/SearchContact";

import { SEARCH_CONTACT } from "./grapql-queries/queries";

function Page() {
	const [contactQuery, setContactQuery] = useState<string>("");
	const [isSearching, setSearching] = useState<boolean>(false);
	const [searchContact, { data, loading }] = useLazyQuery(SEARCH_CONTACT, {
		fetchPolicy: "no-cache"
	});

	useEffect(() => {
		document.title = "Phone App - Search Contact";

		return () => {
			document.title = "Phone App";
		};
	}, []);

	useEffect(() => {
		if (isSearching === true) {
			searchContact({
				variables: {
					where: {
						_or: [{ first_name: { _like: `%${contactQuery}%` } }, { last_name: { _like: `%${contactQuery}%` } }]
					}
				}
			});
		}
	}, [isSearching]);

	useEffect(() => {
		if (loading === false && isSearching === true) {
			setSearching(false);
		}
	}, [loading]);

	return (
		<Fragment>
			<SearchContact contactQuery={contactQuery} onSearching={setSearching} onSetQuery={setContactQuery} />

			<ContactList contacts={data} loading={loading} />
		</Fragment>
	);
}

export default Page;
