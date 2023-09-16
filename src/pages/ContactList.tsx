/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";

function ContactList() {
	return (
		<div css={cardCss.self}>
			<div>
				<h1 css={cardCss.title}>Card Title</h1>
			</div>

			<div css={cardCss.body}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit libero officiis nulla illo labore quidem quisquam
				voluptate, nemo iusto hic placeat. Unde eaque dolore sunt voluptatem laudantium consequuntur distinctio commodi.
			</div>

			<div>
				<button style={buttonStyle}>Click Me</button>
			</div>
		</div>
	);
}

const buttonStyle = {
	backgroundColor: "blue",
	color: "white"
};

const cardCss = {
	self: css({
		backgroundColor: "white",
		border: "1px solid #000",
		borderRadius: "5px",
		padding: "10px"
	}),

	title: css({
		fontSize: "4rem",

		"@media (max-width: 720px)": {
			color: "blue"
		}
	}),

	body: css({
		color: "red",

		"&:hover": {
			backgroundColor: "lightcyan",
			boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)"
		}
	})
};

export default ContactList;
