import { Fragment, useState, useEffect } from "react";

import SearchContact from "./components/SearchContact";
import SkeletonsLoading from "../../components/SkeletonsLoading";

function Page() {
	const [isFetchingData, setFetchingStatus] = useState<boolean>(false);
	const [searchContactQuery, setSearchContactQuery] = useState<string>("");

	useEffect(() => {
		let timer: any;

		if (searchContactQuery !== "") {
			timer = setTimeout(() => {
				console.log(searchContactQuery);
				setFetchingStatus(false);
			}, 1500);
		}

		return () => clearTimeout(timer);
	}, [searchContactQuery]);

	return (
		<Fragment>
			<SearchContact setFetchingStatus={setFetchingStatus} setSearchContactQuery={setSearchContactQuery} />

			{isFetchingData === true && <SkeletonsLoading />}
		</Fragment>
	);
}

export default Page;
