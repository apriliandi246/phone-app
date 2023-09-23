/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";
import { ChangeEvent, Fragment, useEffect, useState } from "react";

import PhoneMultipleInputs from "../../components/PhoneMultipleInputs";
import HeaderTitleNavigation from "../../components/HeaderTitleNavigation";

import { formWrapper, inputBase, buttonRegular, inputUserIcon } from "../../emotion-object-styles/form-groups";

type FormStatusType = "empty" | "filled" | "submitting" | "success";

function Page() {
	const [error, setError] = useState(null);
	const [status, setStatus] = useState<FormStatusType>("empty");
	const [firstPhoneNumber, setFirstPhonenumber] = useState<string>("");
	const [otherNumbers, setOtherNumbers] = useState<{ phone: string }[] | []>([]);
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
		} else {
			setStatus("empty");
		}
	}, [firstPhoneNumber, contactName]);

	return (
		<Fragment>
			<HeaderTitleNavigation title="Add New Contact" />

			<form css={formWrapper}>
				<input
					type="text"
					name="first_name"
					placeholder="First Name"
					value={contactName.firstName}
					css={[inputBase, inputUserIcon]}
					onChange={(event) => setContactName({ ...contactName, firstName: event.target.value.trimStart() })}
				/>

				<input
					type="text"
					name="last_name"
					placeholder="Last Name"
					value={contactName.lastName}
					css={[inputBase, inputUserIcon]}
					onChange={(event) => setContactName({ ...contactName, lastName: event.target.value.trimStart() })}
				/>

				<PhoneMultipleInputs
					otherNumbers={otherNumbers}
					firstPhoneNumber={firstPhoneNumber}
					onSetOtherPhoneNumbers={setOtherNumbers}
					onSetFirstPhoneNumber={setFirstPhonenumber}
				/>

				<button type="submit" disabled={status !== "filled"} css={[buttonRegular, btnSubmit]}>
					Save
				</button>
			</form>
		</Fragment>
	);
}

const btnSubmit = css({
	width: "100%"
});

export default Page;
