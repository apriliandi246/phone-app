/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";

import { buttonRegular } from "../../../emotion-object-styles/form-groups";

interface Props {
	activeTab: string;
	onChangeTab: React.Dispatch<React.SetStateAction<"all" | "favorite">>;
}

function Tab({ activeTab, onChangeTab }: Props) {
	return (
		<div css={tab.self}>
			<button
				css={[buttonRegular, tab.button]}
				onClick={() => onChangeTab("all")}
				style={activeTab === "all" ? { color: "var(--dark-gray)" } : {}}>
				All
			</button>

			<button
				css={[buttonRegular, tab.button]}
				onClick={() => onChangeTab("favorite")}
				style={activeTab === "favorite" ? { color: "var(--dark-gray)" } : {}}>
				Favorites
			</button>

			<div css={tab.activeLine} style={activeTab === "all" ? { left: "0" } : { right: "0" }}></div>
		</div>
	);
}

const tab = {
	self: css({
		display: "grid",
		marginBlock: "3rem",
		position: "relative",
		gridTemplateColumns: "1fr 1fr",
		borderBottom: "0.1rem solid #d9dadd"
	}),

	button: css({
		gap: "0.9rem",
		border: "none",
		display: "flex",
		color: "#6d7588",
		padding: "1.6rem",
		borderRadius: "0",
		fontWeight: "600",
		fontSize: "1.5rem",
		alignItems: "center",
		justifyContent: "center"
	}),

	activeLine: css({
		width: "50%",
		bottom: "-0.1rem",
		position: "absolute",
		borderBottom: "0.3rem solid var(--dark-gray)"
	})
};

export default Tab;
