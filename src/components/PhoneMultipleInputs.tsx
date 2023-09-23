/** @jsxRuntime classic */
/** @jsx jsx */
import { Fragment } from "react";
import { jsx, css } from "@emotion/react/macro";

import { inputBase, inputPhoneIcon } from "../emotion-object-styles/form-groups";

interface Props {
	firstPhoneNumber: string;
	otherNumbers: { phone: string }[] | [];
	onSetFirstPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
	onSetOtherPhoneNumbers: React.Dispatch<React.SetStateAction<{ phone: string }[] | []>>;
}

function PhoneMultipleInputs({ firstPhoneNumber, otherNumbers, onSetFirstPhoneNumber, onSetOtherPhoneNumbers }: Props) {
	function handleAddPhoneNumberInputClick() {
		onSetOtherPhoneNumbers([...otherNumbers, { phone: "" }]);
	}

	function handleOtherPhonerInputChange(value: string, inputOrder: number) {
		const phoneNumbers = [...otherNumbers];
		phoneNumbers[inputOrder].phone = value;

		onSetOtherPhoneNumbers(phoneNumbers);
	}

	function handleDeleteOtherPhoneInput(inputOrder: number) {
		if (otherNumbers !== null) {
			const newInputOrder = otherNumbers.filter((_, index) => index !== inputOrder);
			onSetOtherPhoneNumbers(newInputOrder);
		}
	}

	return (
		<Fragment>
			<div css={phoneMultiple.self}>
				<input
					type="text"
					name="phone_1"
					placeholder="Phone"
					value={firstPhoneNumber}
					css={[inputBase, inputPhoneIcon]}
					onChange={(event) => onSetFirstPhoneNumber(event.target.value.trimStart())}
				/>

				<button type="button" css={phoneMultiple.button} onClick={handleAddPhoneNumberInputClick}>
					<svg width="19" height="19" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M52 32H32v20c0 2.2-1.8 4-4 4s-4-1.8-4-4V32H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h20V4c0-2.2 1.8-4 4-4s4 1.8 4 4v20h20c2.2 0 4 1.8 4 4s-1.8 4-4 4Z"
							fill="var(--dim-gray)"></path>
					</svg>
				</button>
			</div>

			{otherNumbers.length !== 0 &&
				otherNumbers.map((phoneNumber, index) => (
					<div key={index} css={phoneMultiple.self}>
						<input
							type="text"
							placeholder="Phone"
							value={phoneNumber.phone}
							css={[inputBase, inputPhoneIcon]}
							onChange={(event) => handleOtherPhonerInputChange(event.target.value, index)}
						/>

						<button type="button" css={phoneMultiple.button} onClick={() => handleDeleteOtherPhoneInput(index)}>
							<svg width="17" height="17" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M52.2 1.84001C50.64 0.280006 48.12 0.280006 46.56 1.84001L27 21.36L7.44001 1.8C5.88001 0.240005 3.36001 0.240005 1.8 1.8C0.240005 3.36001 0.240005 5.88001 1.8 7.44001L21.36 27L1.8 46.56C0.240005 48.12 0.240005 50.64 1.8 52.2C3.36001 53.76 5.88001 53.76 7.44001 52.2L27 32.64L46.56 52.2C48.12 53.76 50.64 53.76 52.2 52.2C53.76 50.64 53.76 48.12 52.2 46.56L32.64 27L52.2 7.44001C53.72 5.92001 53.72 3.36001 52.2 1.84001Z"
									fill="var(--dim-gray)"
								/>
							</svg>
						</button>
					</div>
				))}
		</Fragment>
	);
}

const phoneMultiple = {
	self: css({
		display: "grid",
		gridTemplateColumns: "1fr 30px"
	}),

	button: css({
		border: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		backgroundColor: "transparent",

		svg: {
			pointerEvents: "none"
		}
	})
};

export default PhoneMultipleInputs;
