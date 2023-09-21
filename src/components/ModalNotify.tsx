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
		width: "300px",
		margin: "auto",
		padding: "2.2rem",
		textAlign: "center",
		borderRadius: "0.4rem",
		backgroundColor: "#fff"
	}),

	title: css({
		fontWeight: "600",
		fontSize: "2.2rem",
		marginBottom: "2.3rem"
	}),

	btnClose: css({
		width: "fit-content"
	})
};

export default ModalNotify;
