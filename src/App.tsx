/** @jsxRuntime classic */
/** @jsx jsx */
import { Suspense, lazy } from "react";
import { jsx, css } from "@emotion/react/macro";
import { Route, Routes } from "react-router-dom";

import SkeletonsLoading from "./components/SkeletonsLoading";

const ContactList = lazy(() => import("./pages/home/Page"));
const SearchContact = lazy(() => import("./pages/search-contact/Page"));
const NewContact = lazy(() => import("./pages/add-contact/Page"));
const EditContact = lazy(() => import("./pages/edit-contact/Page"));
const NotFound = lazy(() => import("./pages/404/Page"));

function App() {
	return (
		<div css={containerCSS.self}>
			<Suspense fallback={<SkeletonsLoading />}>
				<Routes>
					<Route path="/" element={<ContactList />} />
					<Route path="/search-contact" element={<SearchContact />} />
					<Route path="/new-contact" element={<NewContact />} />
					<Route path="/edit-contact/:id" element={<EditContact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</div>
	);
}

const containerCSS = {
	self: css({
		maxWidth: "50rem",
		marginInline: "auto",
		backgroundColor: "#fff",
		padding: "2.6rem 2.4rem 8rem 2.4rem",

		"@media (max-width: 600px)": {
			paddingInline: "1.7rem"
		}
	})
};

export default App;
