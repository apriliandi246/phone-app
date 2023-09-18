/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";
import { Link } from "react-router-dom";

import SearchContact from "./components/SearchContact";
import ContactListItems from "./components/ContactListItems";
import ModalDeleteConfirmation from "./components/ModalDeleteConfirmation";
import SkeletonsLoading from "./components/SkeletonsLoading";
import SpinnerLoading from "./components/SpinnerLoading";
import LoadMoreButton from "./components/LoadMoreLoadMoreButton";

function ContactList() {
	return (
		<div css={mainContainer.self}>
			<SearchContact />

			{/* Favorites contact */}
			<div css={contactlistSection.container}>
				<div css={contactlistSection.header}>
					<svg width="16" height="16" viewBox="0 0 69 66" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
						<path
							d="M34.2278 54.79L50.8278 64.83C53.8678 66.67 57.5878 63.95 56.7878 60.51L52.3878 41.63L67.0678 28.91C69.7478 26.59 68.3078 22.19 64.7878 21.91L45.4678 20.27L37.9078 2.43C36.5478 -0.81 31.9078 -0.81 30.5478 2.43L22.9878 20.23L3.66783 21.87C0.14783 22.15 -1.29217 26.55 1.38783 28.87L16.0678 41.59L11.6678 60.47C10.8678 63.91 14.5878 66.63 17.6278 64.79L34.2278 54.79Z"
							fill="#6a6a6a"
						/>
					</svg>

					<div css={contactlistSection.title}>Favorites</div>
				</div>

				<ContactListItems />
			</div>

			{/* All contact */}
			<div css={contactlistSection.container}>
				<div css={contactlistSection.header}>
					<svg width="16" height="16" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M0 8V64C0 68.4 3.56 72 8 72H64C68.4 72 72 68.4 72 64V8C72 3.6 68.4 0 64 0H8C3.56 0 0 3.6 0 8ZM48 24C48 30.64 42.64 36 36 36C29.36 36 24 30.64 24 24C24 17.36 29.36 12 36 12C42.64 12 48 17.36 48 24ZM12 56C12 48 28 43.6 36 43.6C44 43.6 60 48 60 56V60H12V56Z"
							fill="#6a6a6a"
						/>
					</svg>

					<div css={contactlistSection.title}>All</div>
				</div>

				<ContactListItems />
			</div>

			<LoadMoreButton />
		</div>
	);
}

const mainContainer = {
	self: css({
		width: "100%"
	})
};

const contactlistSection = {
	container: css({
		marginBottom: "3rem"
	}),

	header: css({
		gap: "1rem",
		display: "flex",
		alignItems: "center",
		marginBottom: "1.6rem"
	}),

	title: css({
		fontSize: "1.5rem",
		color: "var(--primary-text-color)"
	})
};

export default ContactList;
