/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";
import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SearchContact from "./components/SearchContact";
import SkeletonsLoading from "../../components/SkeletonsLoading";

function Page() {
	const [searchContactQuery, setSearchContactQuery] = useState("");
	const [isFetchingData, setFetchingStatus] = useState(false);

	useEffect(() => {
		setFetchingStatus(false);
	}, [searchContactQuery]);

	return (
		<div>
			<SearchContact setFetchingStatus={setFetchingStatus} setSearchContactQuery={setSearchContactQuery} />

			<SkeletonsLoading />
		</div>
	);
}

export default Page;
