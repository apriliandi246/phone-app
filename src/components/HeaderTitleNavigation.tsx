/** @jsxRuntime classic */
/** @jsx jsx */
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/react/macro";

function HeaderTitleNavigation({ title }: { title: string }) {
	return (
		<header css={header.self}>
			<Link to="/" css={header.back}>
				<svg width="13" height="23" viewBox="0 0 28 46" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M25.84 38.52 10.32 23 25.84 7.48a3.983 3.983 0 0 0 0-5.64 3.983 3.983 0 0 0-5.64 0L1.84 20.2a3.983 3.983 0 0 0 0 5.64L20.2 44.2a3.983 3.983 0 0 0 5.64 0c1.52-1.56 1.56-4.12 0-5.68Z"
						fill="var(--dim-gray)"
					/>
				</svg>
			</Link>

			<h1 css={header.title}>{title}</h1>
		</header>
	);
}

const header = {
	self: css({
		display: "grid",
		alignItems: "center",
		gridTemplateColumns: "repeat(12, 1fr)"
	}),

	back: css({
		display: "flex",
		alignItems: "center",
		gridColumn: "span 1",
		justifyContent: "flex-start"
	}),

	title: css({
		fontWeight: "600",
		fontSize: "1.8rem",
		textAlign: "center",
		gridColumn: "span 10",
		color: "var(--dark-gray)"
	})
};

export default HeaderTitleNavigation;
