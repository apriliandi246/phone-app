/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";
import { ContactType } from "../../home/types/contactList";
import { Fragment } from "react";

import SpinnerLoading from "../../home/components/SpinnerLoading";

interface Props {
	loading: boolean;
	contacts: { contact: ContactType[] };
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
				<div key={contact.id}>
					<div>
						{contact.first_name} {contact.last_name}
					</div>

					<div>
						{contact.phones.map((phone: any) => (
							<div key={phone.number}>{phone.number}</div>
						))}
					</div>
				</div>
			))}
		</Fragment>
	);
}

const noContacts = css({
	fontSize: "1.3rem",
	textAlign: "center"
});

export default ContactList;
