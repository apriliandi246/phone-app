/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";
import { Fragment } from "react";

import { ContactListType } from "../../../types/contact";
import SpinnerLoading from "../../../components/SpinnerLoading";

interface Props {
	loading: boolean;
	contacts: { contact: ContactListType[] };
}

function ContactList({ loading, contacts }: Props) {
	if (loading === false && contacts === undefined) {
		return null;
	}

	if (loading === true) {
		return <SpinnerLoading />;
	}

	if (contacts !== undefined && contacts.contact.length === 0) {
		return <div css={noContacts}>No Contact Found</div>;
	}

	return (
		<Fragment>
			{contacts.contact.map((contact: any) => (
				<div key={contact.id} css={contactStyle.self}>
					<div css={contactStyle.avatar}>{contact.first_name[0]}</div>

					<div css={contactStyle.details}>
						<div css={contactStyle.name}>
							{contact.first_name} {contact.last_name}
						</div>

						<div css={contactStyle.numbers}>
							{contact.phones.map(
								(phone: any) =>
									phone.number.trim() !== "" && (
										<div key={phone.number} css={contactStyle.phone}>
											{phone.number}
										</div>
									)
							)}
						</div>
					</div>
				</div>
			))}
		</Fragment>
	);
}

const contactStyle = {
	self: css({
		gap: "1.4rem",
		display: "grid",
		borderRadius: "0.4rem",
		marginBottom: "1.2rem",
		padding: "0.8rem 1.7rem",
		gridTemplateColumns: "repeat(12, 1fr)",
		border: "0.1rem solid var(--slate-gray)",

		"&:last-child": {
			marginBottom: "0"
		}
	}),

	avatar: css({
		color: "#fff",
		display: "flex",
		width: "3.8rem",
		height: "3.8rem",
		fontSize: "1.5rem",
		gridColumn: "1 / 2",
		borderRadius: "100%",
		alignItems: "center",
		alignSelf: "flex-start",
		justifyContent: "center",
		textTransform: "uppercase",
		backgroundColor: "#6a6a6a"
	}),

	details: css({
		gridColumn: "2 / 12"
	}),

	name: css({
		fontWeight: "500",
		fontSize: "1.5rem",
		color: "var(--dark-gray)"
	}),

	numbers: css({
		marginTop: "0.3rem"
	}),

	phone: css({
		fontSize: "1.4rem",
		marginBottom: "0.1rem",
		color: "var(--dark-gray)",

		":last-child": {
			marginBottom: "0"
		}
	})
};

const noContacts = css({
	fontSize: "1.3rem",
	textAlign: "center"
});

export default ContactList;
