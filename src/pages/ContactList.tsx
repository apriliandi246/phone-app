/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";
import { Link } from "react-router-dom";
import { useState } from "react";

function ContactList() {
	const [contacts, setContact] = useState([1, 2, 3, 4, 5]);

	return (
		<div css={contactListContainer.self}>
			<div css={searchContactBar.searchContact}>
				<div css={searchContactBar.inputSearchWrapper}>
					<div css={searchContactBar.searchIcon}>
						<svg
							fill="none"
							width="16px"
							height="16px"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							role="img">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M13 9.03a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm.192 5.606a7 7 0 1 1 1.414-1.414l1.101 1.1-1.414 1.415-1.1-1.101Z"
								fill="#989898"></path>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M20.527 20.61a2 2 0 0 1-2.8.027l-3.259-3.194a2 2 0 1 1 2.774-2.881l3.258 3.194a2 2 0 0 1 .027 2.855Z"
								fill="#989898"></path>
						</svg>
					</div>

					<input css={searchContactBar.inputSearch} type="text" placeholder="Search contact name" />

					<button css={searchContactBar.buttonClearSearch}>
						<svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M19.071 4.929c3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142 3.905-3.906 10.237-3.906 14.142 0Zm-7.031 5.147L10.175 8.21c-.35-.35-.717-.53-1.1-.54a1.33 1.33 0 0 0-1.008.418c-.288.287-.424.62-.41 1 .02.374.223.755.612 1.144l1.807 1.807-1.865 1.865c-.35.35-.53.717-.54 1.1-.01.384.13.72.418 1.008.288.287.62.424 1 .41.374-.02.755-.223 1.144-.612l1.807-1.807 1.786 1.786c.383.383.767.59 1.15.618a1.27 1.27 0 0 0 1.015-.396c.288-.287.425-.625.41-1.014-.014-.388-.218-.78-.611-1.173l-1.786-1.785 1.786-1.786c.383-.383.59-.767.619-1.15a1.27 1.27 0 0 0-.396-1.015 1.315 1.315 0 0 0-1.015-.41c-.388.014-.78.218-1.172.611l-1.786 1.786Z"
								fill="#989898"></path>
						</svg>
					</button>
				</div>

				<div css={searchContactBar.buttonSearchWrapper}>
					<Link to="/new-contact">
						<svg width="19" height="19" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
							<path
								d="M52 32H32V52C32 54.2 30.2 56 28 56C25.8 56 24 54.2 24 52V32H4C1.8 32 0 30.2 0 28C0 25.8 1.8 24 4 24H24V4C24 1.8 25.8 0 28 0C30.2 0 32 1.8 32 4V24H52C54.2 24 56 25.8 56 28C56 30.2 54.2 32 52 32Z"
								fill="#989898"
							/>
						</svg>
					</Link>
				</div>
			</div>

			<div css={favoriteContact.container}>
				<div css={favoriteContact.header}>
					<svg width="16" height="16" viewBox="0 0 69 66" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
						<path
							d="M34.2278 54.79L50.8278 64.83C53.8678 66.67 57.5878 63.95 56.7878 60.51L52.3878 41.63L67.0678 28.91C69.7478 26.59 68.3078 22.19 64.7878 21.91L45.4678 20.27L37.9078 2.43C36.5478 -0.81 31.9078 -0.81 30.5478 2.43L22.9878 20.23L3.66783 21.87C0.14783 22.15 -1.29217 26.55 1.38783 28.87L16.0678 41.59L11.6678 60.47C10.8678 63.91 14.5878 66.63 17.6278 64.79L34.2278 54.79Z"
							fill="#6a6a6a"
						/>
					</svg>

					<div css={favoriteContact.title}>Favorites</div>
				</div>

				<div>
					{contacts.map((contact) => (
						<div key={contact} css={favoriteContact.contactItem}>
							<button type="button" css={favoriteContact.contactItemBtn}>
								<div css={favoriteContact.contactItemAvatar}>f</div>

								<div css={favoriteContact.contactItemData}>
									<div css={favoriteContact.contactItemName}>Farhan Apriliandi</div>
									<div css={favoriteContact.contactItemNumber}>+6281355531239</div>
								</div>

								<svg width="12" height="12" viewBox="0 0 46 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M38.52 2.15999L23 17.68L7.48004 2.15999C5.92004 0.59999 3.40004 0.59999 1.84004 2.15999C0.280044 3.71999 0.280044 6.23999 1.84004 7.79999L20.2 26.16C21.76 27.72 24.28 27.72 25.84 26.16L44.2 7.79999C45.76 6.23999 45.76 3.71999 44.2 2.15999C42.64 0.63999 40.08 0.59999 38.52 2.15999Z"
										fill="#6a6a6a"
									/>
								</svg>
							</button>

							{/* <div css={favoriteContact.contactItemMenus}>
								<button css={favoriteContact.contactItemMenu}>
									<svg width="16" height="16" viewBox="0 0 70 66" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M65.6 22.16L46.24 20.48L38.68 2.68C37.32 -0.56 32.68 -0.56 31.32 2.68L23.76 20.52L4.43999 22.16C0.919986 22.44 -0.520015 26.84 2.15999 29.16L16.84 41.88L12.44 60.76C11.64 64.2 15.36 66.92 18.4 65.08L35 55.08L51.6 65.12C54.64 66.96 58.36 64.24 57.56 60.8L53.16 41.88L67.84 29.16C70.52 26.84 69.12 22.44 65.6 22.16ZM35 47.6L19.96 56.68L23.96 39.56L10.68 28.04L28.2 26.52L35 10.4L41.84 26.56L59.36 28.08L46.08 39.6L50.08 56.72L35 47.6Z"
											fill="#6a6a6a"
										/>
									</svg>

									<span>Favorite</span>
								</button>

								<button css={favoriteContact.contactItemMenu}>
									<svg width="16" height="16" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M0 58.84V71C0 72.12 0.88 73 2 73H14.16C14.68 73 15.2 72.8 15.56 72.4L59.24 28.76L44.24 13.76L0.6 57.4C0.2 57.8 0 58.28 0 58.84ZM70.84 17.16C72.4 15.6 72.4 13.08 70.84 11.52L61.48 2.15999C59.92 0.59999 57.4 0.59999 55.84 2.15999L48.52 9.47999L63.52 24.48L70.84 17.16Z"
											fill="#6a6a6a"
										/>
									</svg>

									<span>Edit</span>
								</button>

								<button css={favoriteContact.contactItemMenu}>
									<svg width="16" height="14" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M4 64C4 68.4 7.6 72 12 72H44C48.4 72 52 68.4 52 64V24C52 19.6 48.4 16 44 16H12C7.6 16 4 19.6 4 24V64ZM52 4H42L39.16 1.16C38.44 0.44 37.4 0 36.36 0H19.64C18.6 0 17.56 0.44 16.84 1.16L14 4H4C1.8 4 0 5.8 0 8C0 10.2 1.8 12 4 12H52C54.2 12 56 10.2 56 8C56 5.8 54.2 4 52 4Z"
											fill="#6a6a6a"
										/>
									</svg>

									<span>Delete</span>
								</button>
							</div> */}
						</div>
					))}
				</div>
			</div>

			<div>
				<div css={allContactCSS.header}>
					<svg width="16" height="16" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M0 8V64C0 68.4 3.56 72 8 72H64C68.4 72 72 68.4 72 64V8C72 3.6 68.4 0 64 0H8C3.56 0 0 3.6 0 8ZM48 24C48 30.64 42.64 36 36 36C29.36 36 24 30.64 24 24C24 17.36 29.36 12 36 12C42.64 12 48 17.36 48 24ZM12 56C12 48 28 43.6 36 43.6C44 43.6 60 48 60 56V60H12V56Z"
							fill="#6a6a6a"
						/>
					</svg>

					<div css={allContactCSS.title}>All</div>
				</div>

				<div>
					{contacts.map((contact) => (
						<div key={contact} css={favoriteContact.contactItem}>
							<button type="button" css={favoriteContact.contactItemBtn}>
								<div css={favoriteContact.contactItemAvatar}>f</div>

								<div css={favoriteContact.contactItemData}>
									<div css={favoriteContact.contactItemName}>Farhan Apriliandi</div>
									<div css={favoriteContact.contactItemNumber}>+6281355531239</div>
								</div>

								<svg width="12" height="12" viewBox="0 0 46 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M38.52 2.15999L23 17.68L7.48004 2.15999C5.92004 0.59999 3.40004 0.59999 1.84004 2.15999C0.280044 3.71999 0.280044 6.23999 1.84004 7.79999L20.2 26.16C21.76 27.72 24.28 27.72 25.84 26.16L44.2 7.79999C45.76 6.23999 45.76 3.71999 44.2 2.15999C42.64 0.63999 40.08 0.59999 38.52 2.15999Z"
										fill="#6a6a6a"
									/>
								</svg>
							</button>

							<div css={favoriteContact.contactItemMenus}>
								<button css={favoriteContact.contactItemMenu}>
									<svg width="16" height="16" viewBox="0 0 70 66" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M65.6 22.16L46.24 20.48L38.68 2.68C37.32 -0.56 32.68 -0.56 31.32 2.68L23.76 20.52L4.43999 22.16C0.919986 22.44 -0.520015 26.84 2.15999 29.16L16.84 41.88L12.44 60.76C11.64 64.2 15.36 66.92 18.4 65.08L35 55.08L51.6 65.12C54.64 66.96 58.36 64.24 57.56 60.8L53.16 41.88L67.84 29.16C70.52 26.84 69.12 22.44 65.6 22.16ZM35 47.6L19.96 56.68L23.96 39.56L10.68 28.04L28.2 26.52L35 10.4L41.84 26.56L59.36 28.08L46.08 39.6L50.08 56.72L35 47.6Z"
											fill="#6a6a6a"
										/>
									</svg>

									<span>Favorite</span>
								</button>

								<Link to="/edit-contact" css={favoriteContact.contactItemMenu}>
									<svg width="16" height="16" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M0 58.84V71C0 72.12 0.88 73 2 73H14.16C14.68 73 15.2 72.8 15.56 72.4L59.24 28.76L44.24 13.76L0.6 57.4C0.2 57.8 0 58.28 0 58.84ZM70.84 17.16C72.4 15.6 72.4 13.08 70.84 11.52L61.48 2.15999C59.92 0.59999 57.4 0.59999 55.84 2.15999L48.52 9.47999L63.52 24.48L70.84 17.16Z"
											fill="#6a6a6a"
										/>
									</svg>

									<span>Edit</span>
								</Link>

								<button css={favoriteContact.contactItemMenu}>
									<svg width="16" height="14" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M4 64C4 68.4 7.6 72 12 72H44C48.4 72 52 68.4 52 64V24C52 19.6 48.4 16 44 16H12C7.6 16 4 19.6 4 24V64ZM52 4H42L39.16 1.16C38.44 0.44 37.4 0 36.36 0H19.64C18.6 0 17.56 0.44 16.84 1.16L14 4H4C1.8 4 0 5.8 0 8C0 10.2 1.8 12 4 12H52C54.2 12 56 10.2 56 8C56 5.8 54.2 4 52 4Z"
											fill="#6a6a6a"
										/>
									</svg>

									<span>Delete</span>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>

			<div css={loadMore.container}>
				<button type="button" css={loadMore.button}>
					<div>Load more</div>

					<svg width="16" height="16" viewBox="0 0 46 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M38.52 2.15999L23 17.68L7.48004 2.15999C5.92004 0.59999 3.40004 0.59999 1.84004 2.15999C0.280044 3.71999 0.280044 6.23999 1.84004 7.79999L20.2 26.16C21.76 27.72 24.28 27.72 25.84 26.16L44.2 7.79999C45.76 6.23999 45.76 3.71999 44.2 2.15999C42.64 0.63999 40.08 0.59999 38.52 2.15999Z"
							fill="#6a6a6a"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}

const contactListContainer = {
	self: css({
		width: "100%"
	})
};

const searchContactBar = {
	searchContact: css({
		gap: "1rem",
		display: "grid",
		marginBottom: "3rem",
		gridTemplateColumns: "repeat(12, 1fr)",

		"@media (max-width: 600px)": {
			gap: "0"
		}
	}),

	inputSearchWrapper: css({
		position: "relative",
		gridColumn: "span 11",

		"@media (max-width: 600px)": {
			marginRight: "1rem"
		}
	}),

	searchIcon: css({
		top: "0",
		left: "0",
		bottom: "0",
		display: "flex",
		alignItems: "center",
		marginLeft: "1.1rem",
		position: "absolute",
		marginRight: "0.9rem",
		justifyContent: "center"
	}),

	inputSearch: css({
		width: "100%",
		border: "none",
		color: "#6a6a6a",
		fontSize: "1.2rem",
		borderRadius: "1.9rem",
		padding: "1rem 3.4rem",
		backgroundColor: "#f2f3f4"
	}),

	buttonSearchWrapper: css({
		cursor: "pointer",
		justifySelf: "end",
		alignSelf: "center",
		gridColumn: "12 / 13"
	}),

	buttonClearSearch: css({
		top: "0",
		right: "0",
		bottom: "0",
		border: "none",
		position: "absolute",
		width: "fit-content",
		marginRight: "0.9rem",
		backgroundColor: "transparent",

		svg: {
			display: "block",
			pointerEvents: "none"
		}
	})
};

const favoriteContact = {
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
		color: "#4a4a4a",
		fontSize: "1.5rem"
	}),

	contactItem: css({
		borderRadius: "0.4rem",
		marginBottom: "1.2rem",
		padding: "1rem 1.7rem",
		border: "0.1rem solid #f2f3f4",

		"&:last-child": {
			marginBottom: "0"
		}
	}),

	contactItemBtn: css({
		width: "100%",
		border: "none",
		display: "grid",
		backgroundColor: "transparent",
		gridTemplateColumns: "repeat(12, 1fr)",

		svg: {
			justifySelf: "end",
			alignSelf: "center",
			gridColumn: "12 / 13"
		}
	}),

	contactItemData: css({
		textAlign: "left",
		alignSelf: "center",
		gridColumn: "2 / 11",
		marginLeft: "1.4rem"
	}),

	contactItemAvatar: css({
		color: "#fff",
		display: "grid",
		fontSize: "1.5rem",
		alignSelf: "center",
		gridColumn: "1 / 2",
		borderRadius: "100%",
		aspectRatio: "1 / 1",
		placeItems: "center",
		textTransform: "uppercase",
		backgroundColor: "#6a6a6a"
	}),

	contactItemName: css({
		color: "#4a4a4a",
		fontSize: "1.4rem",
		marginBottom: "0.1rem"
	}),

	contactItemNumber: css({
		color: "#4a4a4a",
		fontSize: "1.3rem"
	}),

	contactItemMenus: css({
		display: "flex",
		marginTop: "1.6rem",
		alignItems: "center",
		marginLeft: "4.9rem",
		justifyContent: "space-between"
	}),

	contactItemMenu: css({
		border: "none",
		display: "flex",
		alignItems: "center",
		textDecoration: "none",
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: "transparent",

		svg: {
			display: "block",
			pointerEvents: "none"
		},

		span: {
			color: "#6a6a6a",
			fontSize: "1.2rem",
			marginTop: "0.4rem"
		}
	})
};

const allContactCSS = {
	header: css({
		gap: "1rem",
		display: "flex",
		alignItems: "center",
		marginBottom: "1.6rem"
	}),

	title: css({
		color: "#4a4a4a",
		fontSize: "1.5rem"
	})
};

const loadMore = {
	container: css({
		width: "100%",
		display: "grid",
		marginTop: "3.8rem",
		placeItems: "center"
	}),

	button: css({
		gap: "1rem",
		border: "none",
		display: "flex",
		alignItems: "center",
		width: "fit-content",
		justifyContent: "center",
		backgroundColor: "transparent",

		div: {
			color: "#4a4a4a",
			fontSize: "1.4rem"
		},

		svg: {
			display: "block",
			pointerEvents: "none"
		}
	})
};

export default ContactList;
