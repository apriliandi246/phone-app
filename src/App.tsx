import { Route, Routes } from "react-router-dom";

import ContactList from "./pages/ContactList";
import EditContact from "./pages/EditContact";
import NewContact from "./pages/NewContact";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<ContactList />} />
				<Route path="/new-contact" element={<NewContact />} />
				<Route path="/edit-contact" element={<EditContact />} />
			</Routes>
		</>
	);
}

export default App;
