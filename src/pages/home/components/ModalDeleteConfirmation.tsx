/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/react/macro";

import { buttonRegular, buttonDanger } from "../../../emotion-object-styles/form-groups";

interface Props {
	onClose: () => void;
	onDelete: () => void;
}

function ModalDeleteConfirmation({ onClose, onDelete }: Props) {
	function handleDeleteClick() {
		onDelete();
	}

	function handleCancelClick() {
		onClose();
	}

	return (
		<div css={modal.overlay}>
			<div css={modal.self}>
				<div css={modal.title}>Are you sure?</div>
				<div css={modal.body}>Once you delete this you are not alllowed to restore.</div>

				<div css={modal.menuWrapper}>
					<button type="button" onClick={handleCancelClick} css={buttonRegular}>
						Cancel
					</button>

					<button type="button" onClick={handleDeleteClick} css={buttonDanger}>
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

const modal = {
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

	self: css({
		width: "315px",
		margin: "auto",
		padding: "2.2rem",
		borderRadius: "0.4rem",
		backgroundColor: "#fff"
	}),

	title: css({
		fontSize: "1.6rem"
	}),

	body: css({
		fontSize: "1.3rem",
		marginTop: "1.1rem",
		marginBottom: "1.5rem"
	}),

	menuWrapper: css({
		gap: "1.2rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		button: {
			width: "100%"
		}
	})
};

export default ModalDeleteConfirmation;
