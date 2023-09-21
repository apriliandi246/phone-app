/** @jsxRuntime classic */
/** @jsx jsx */
import { Route, Routes } from "react-router-dom";
import { jsx, css } from "@emotion/react/macro";

import NotFound from "./pages/404/Page";
import ContactList from "./pages/home/Page";
import NewContact from "./pages/add-contact/Page";
import EditContact from "./pages/edit-contact/Page";
import SearchContact from "./pages/search-contact/Page";

function App() {
	return (
		<div css={containerCSS.self}>
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="/" element={<ContactList />} />
				<Route path="/search-contact" element={<SearchContact />} />
				<Route path="/new-contact" element={<NewContact />} />
				<Route path="/edit-contact/:id" element={<EditContact />} />
			</Routes>
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
