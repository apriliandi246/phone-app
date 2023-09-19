/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/react/macro";

import { buttonRegular, buttonDanger } from "../../../object-styles/form-groups";

interface Props {
	onClose: () => void;
	onDelete: () => void;
}

function ModalDeleteConfirmation({ onClose, onDelete }: Props) {
	function deleteContact() {
		onDelete();
	}

	function closeModalDeleteConfirmation() {
		const body = document.body;

		body.style.overflow = "visible";
		onClose();
	}

	return (
		<div css={modalConfirmation.overlay}>
			<div css={modalConfirmation.modal}>
				<div css={modalConfirmation.modalTitle}>Are you sure?</div>

				<div css={modalConfirmation.modalBody}>Once you delete this you are not alllowed to restore.</div>

				<div css={modalConfirmation.buttonsWrapper}>
					<button
						type="button"
						onClick={closeModalDeleteConfirmation}
						css={[buttonRegular, modalConfirmation.btnCancel]}>
						Cancel
					</button>

					<button type="button" onClick={deleteContact} css={[buttonDanger, modalConfirmation.btnDelete]}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}

const modalAnimation = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

const modalConfirmation = {
	overlay: css({
		top: "0",
		left: "0",
		zIndex: "999",
		width: "100%",
		height: "100%",
		display: "flex",
		position: "fixed",
		alignItems: "center",
		justifyContent: "center",
		animation: `${modalAnimation} 100ms`,
		backgroundColor: "rgba(0, 0, 0, 0.5)"
	}),

	modal: css({
		width: "315px",
		margin: "auto",
		padding: "2.2rem",
		borderRadius: "0.4rem",
		backgroundColor: "#fff"
	}),

	modalTitle: css({
		fontSize: "1.6rem"
	}),

	modalBody: css({
		fontSize: "1.3rem",
		marginTop: "1.1rem",
		marginBottom: "1.5rem"
	}),

	buttonsWrapper: css({
		gap: "1.2rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	}),

	btnCancel: css({
		width: "100%"
	}),

	btnDelete: css({
		width: "100%"
	})
};

export default ModalDeleteConfirmation;
