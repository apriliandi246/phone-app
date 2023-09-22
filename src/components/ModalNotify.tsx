/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";

import { buttonRegular } from "../emotion-object-styles/form-groups";

function ModalNotify({ onClose }: { onClose: () => void }) {
	function handleClick() {
		onClose();
	}

	return (
		<div css={modal.overlay}>
			<div css={modal.self}>
				<div css={modal.title}>Contact Deleted</div>
				<div css={modal.body}>Contact successfully deleted</div>

				<button onClick={handleClick} css={[buttonRegular, modal.btnClose]}>
					Close
				</button>
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

	btnClose: css({
		width: "100%"
	})
};

export default ModalNotify;
