import { Fragment, useState, useEffect } from "react";

import SearchContact from "./components/SearchContact";
import SkeletonsLoading from "../../components/SkeletonsLoading";

function Page() {
	const [contactQuery, setContactQuery] = useState<string>("");
	const [isSearching, setSearching] = useState<boolean>(false);

	useEffect(() => {
		document.title = "Phone App - Search Contact";

		return () => {
			document.title = "Phone App";
		};
	}, []);

	useEffect(() => {
		let timer: any;

		if (isSearching === true && contactQuery !== "") {
			timer = setTimeout(() => {
				console.log(contactQuery.trim());
				setSearching(false);
			}, 1500);
		}

		return () => clearTimeout(timer);
	}, [isSearching]);

	return (
		<Fragment>
			<SearchContact contactQuery={contactQuery} onSearching={setSearching} onSetQuery={setContactQuery} />
			{isSearching === true && <SkeletonsLoading />}
		</Fragment>
	);
}

export default Page;
