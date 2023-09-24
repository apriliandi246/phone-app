/** @jsxRuntime classic */
/** @jsx jsx */
import { useMutation } from "@apollo/client";
import { jsx, css } from "@emotion/react/macro";
import { FormEvent, Fragment, useEffect, useState } from "react";

import ModalNotify from "../../components/ModalNotify";
import PhoneMultipleInputs from "../../components/PhoneMultipleInputs";
import HeaderTitleNavigation from "../../components/HeaderTitleNavigation";

import { FormStatusType } from "../../types/form";
import { ADD_CONTACT } from "./grapql-queries/queries";
import { formWrapper, inputBase, buttonRegular, inputUserIcon } from "../../emotion-object-styles/form-groups";

function Page() {
	const [addContact, { loading, data, error }] = useMutation(ADD_CONTACT);

	const [status, setStatus] = useState<FormStatusType>("empty");
	const [firstPhoneNumber, setFirstPhonenumber] = useState<string>("");
	const [otherNumbers, setOtherNumbers] = useState<{ number: string }[] | []>([]);
	const [contactName, setContactName] = useState<{ firstName: string; lastName: string }>({
		firstName: "",
		lastName: ""
	});

	useEffect(() => {
		document.title = "Phone App - Edit Contact";

		return () => {
			document.title = "Phone App";
		};
	}, []);

	useEffect(() => {
		const hasEmptyValues = firstPhoneNumber === "" || contactName.firstName === "" || contactName.lastName === "";

		if (hasEmptyValues === false) {
			setStatus("filled");
		}

		if (hasEmptyValues === true && status === "filled") {
			setStatus("empty");
		}
	}, [firstPhoneNumber, contactName]);

	useEffect(() => {
		if (error === undefined && loading === false && status === "submitting") {
			const contactsString = localStorage.getItem("contacts");

			setContactName({ firstName: "", lastName: "" });
			setFirstPhonenumber("");
			setOtherNumbers([]);

			if (contactsString !== null) {
				const contacts = JSON.parse(contactsString);
				const newContacts = JSON.stringify([...contacts, ...data.insert_contact.returning]);

				localStorage.setItem("contacts", newContacts);

				setStatus("success");
			}
		}
	}, [loading]);

	function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (firstPhoneNumber === "" || contactName.firstName === "" || contactName.lastName === "") {
			return;
		}

		setStatus("submitting");

		const newContact = {
			first_name: contactName.firstName,
			last_name: contactName.lastName,
			phones: [{ number: firstPhoneNumber }]
		};

		if (otherNumbers.length !== 0) {
			const otherNumberFiltered = otherNumbers.filter((phone) => phone.number !== "");
			newContact.phones = [...newContact.phones, ...otherNumberFiltered];
		}

		addContact({
			variables: newContact,
			onError: () => {
				setContactName({ firstName: "", lastName: "" });
				setFirstPhonenumber("");
				setOtherNumbers([]);
				setStatus("error");
			}
		});
	}

	function closeModalNotify() {
		setStatus("empty");
	}

	return (
		<Fragment>
			<HeaderTitleNavigation title="Add New Contact" />

			<form css={formWrapper} onSubmit={handleSubmitForm}>
				<input
					type="text"
					name="first_name"
					placeholder="First Name"
					value={contactName.firstName}
					css={[inputBase, inputUserIcon]}
					disabled={status === "submitting"}
					onChange={(event) => setContactName({ ...contactName, firstName: event.target.value.trimStart() })}
				/>

				<input
					type="text"
					name="last_name"
					placeholder="Last Name"
					value={contactName.lastName}
					css={[inputBase, inputUserIcon]}
					disabled={status === "submitting"}
					onChange={(event) => setContactName({ ...contactName, lastName: event.target.value.trimStart() })}
				/>

				<PhoneMultipleInputs
					formStatus={status}
					otherNumbers={otherNumbers}
					firstPhoneNumber={firstPhoneNumber}
					onSetOtherPhoneNumbers={setOtherNumbers}
					onSetFirstPhoneNumber={setFirstPhonenumber}
				/>

				<button type="submit" disabled={status !== "filled"} css={[buttonRegular, btnSubmit]}>
					{status === "submitting" ? "Loading" : "Save"}
				</button>
			</form>

			{status === "success" && (
				<ModalNotify title="Contact Added" message="Contact successfully added" onClose={closeModalNotify} />
			)}

			{status === "error" && (
				<ModalNotify title="Something Error" message="One of phone number already exist" onClose={closeModalNotify} />
			)}
		</Fragment>
	);
}

const btnSubmit = css({
	width: "100%"
});

export default Page;
