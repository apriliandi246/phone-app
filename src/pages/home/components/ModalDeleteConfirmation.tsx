/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/react/macro";

function ModalDeleteConfirmation() {
	return (
		<div css={modalConfirmation.overlay}>
			<div css={modalConfirmation.modal}>
				<div css={modalConfirmation.modalTitle}>Are you sure?</div>

				<div css={modalConfirmation.modalBody}>Once you delete this you are not alllowed to restore.</div>

				<div css={modalConfirmation.buttonsWrapper}>
					<button type="button" css={modalConfirmation.btnCancel}>
						Cancel
					</button>

					<button type="button" css={modalConfirmation.btnDelete}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}

const modal = keyframes`
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
		animation: `${modal} 100ms`,
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
		marginTop: "1rem",
		fontSize: "1.3rem",
		marginBottom: "1.4rem"
	}),

	buttonsWrapper: css({
		gap: "1.2rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		button: {
			width: "100%",
			fontSize: "1.3rem",
			borderStyle: "solid",
			borderWidth: "0.1rem",
			borderRadius: "0.4rem",
			padding: "0.8rem 1.4rem"
		}
	}),

	btnCancel: css({
		borderColor: "#9ca3af",
		backgroundColor: "#fff",
		color: "var(--primary-text-color)"
	}),

	btnDelete: css({
		color: "#fff",
		borderColor: "#ab091e",
		backgroundColor: "#ab091e",

		":hover": {
			backgroundColor: "#910618"
		},

		":active": {
			backgroundColor: "#7e0515"
		}
	})
};

export default ModalDeleteConfirmation;
