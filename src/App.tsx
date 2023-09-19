/** @jsxRuntime classic */
/** @jsx jsx */
import { Route, Routes } from "react-router-dom";
import { jsx, css } from "@emotion/react/macro";

import ContactList from "./pages/home";
import EditContact from "./pages/edit-contact";
import NewContact from "./pages/add-contact";
import SearchContact from "./pages/search-contact/index";

function App() {
	return (
		<div css={containerCSS.self}>
			<Routes>
				<Route path="/" element={<ContactList />} />
				<Route path="/search-contact" element={<SearchContact />} />
				<Route path="/new-contact" element={<NewContact />} />
				<Route path="/edit-contact" element={<EditContact />} />
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
