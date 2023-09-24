/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";
import { Fragment, ChangeEvent, useEffect, useState } from "react";

import HeaderTitleNavigation from "../../components/HeaderTitleNavigation";

import { formWrapper, inputBase, buttonRegular, inputUserIcon } from "../../emotion-object-styles/form-groups";
import PhoneMultipleInputs from "../../components/PhoneMultipleInputs";

type FormStatusType = "empty" | "filled" | "submitting" | "success";

function Page() {
	const [error, setError] = useState(null);
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

	return (
		<Fragment>
			<HeaderTitleNavigation title="Edit Contact" />

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
					formStatus={status}
					otherNumbers={otherNumbers}
					firstPhoneNumber={firstPhoneNumber}
					onSetOtherPhoneNumbers={setOtherNumbers}
					onSetFirstPhoneNumber={setFirstPhonenumber}
				/>

				<button type="submit" css={[buttonRegular, btnSubmit]}>
					Save
				</button>
			</form>
		</Fragment>
	);
}

const header = {
	self: css({
		display: "flex",
		columnGap: "1.7rem",
		alignItems: "center"
	}),

	back: css({
		display: "grid",
		placeItems: "center"
	}),

	title: css({
		fontWeight: "600",
		fontSize: "1.6rem",
		color: "var(--dark-gray)"
	})
};

const btnSubmit = css({
	width: "100%"
});

export default Page;
