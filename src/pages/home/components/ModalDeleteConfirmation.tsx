/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect } from "react";
import { jsx, css } from "@emotion/react/macro";

import { buttonRegular, buttonDanger } from "../../../emotion-object-styles/form-groups";

interface Props {
	isDeleting: boolean;
	onDelete: () => void;
	onClose: React.Dispatch<React.SetStateAction<{ isOpen: boolean; contactId: number }>>;
}

function ModalDeleteConfirmation({ isDeleting, onClose, onDelete }: Props) {
	useEffect(() => {
		const body = document.body;
		body.style.overflow = "hidden";

		return () => {
			body.style.overflow = "visible";
		};
	}, []);

	function handleDeleteClick() {
		onDelete();
	}

	function handleCancelClick() {
		onClose((prevState) => ({
			...prevState,
			isOpen: false
		}));
	}

	return (
		<div css={modal.overlay}>
			<div css={modal.self}>
				<div css={modal.title}>Are you sure?</div>
				<div css={modal.body}>Once you delete this you are not alllowed to restore.</div>

				<div css={modal.menuWrapper}>
					<button
						type="button"
						css={buttonRegular}
						onClick={handleCancelClick}
						disabled={isDeleting === true ? true : false}>
						Cancel
					</button>

					<button
						type="button"
						css={buttonDanger}
						onClick={handleDeleteClick}
						disabled={isDeleting === true ? true : false}>
						{isDeleting === true ? "Loading" : "Delete"}
					</button>
				</div>
			</div>
		</div>
	);
}

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
		fontWeight: "600",
		fontSize: "2.2rem"
	}),

	body: css({
		fontSize: "1.3rem",
		marginTop: "1.1rem",
		marginBottom: "1.7rem"
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
