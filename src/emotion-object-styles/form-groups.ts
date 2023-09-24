import { css } from "@emotion/react/macro";

const buttonBase = css({
	cursor: "pointer",
	fontSize: "1.4rem",
	borderStyle: "solid",
	borderWidth: "0.1rem",
	borderRadius: "0.4rem",
	padding: "0.8rem 1.4rem",
	transition: "background-color 100ms"
});

export const inputBase = css({
	width: "100%",
	fontSize: "1.4rem",
	borderRadius: "0.4rem",
	backgroundColor: "#fff",
	backgroundSize: "1.6rem",
	color: "var(--dark-gray)",
	backgroundRepeat: "no-repeat",
	fontFamily: "var(--font-family)",
	padding: "0.8rem 1.4rem 0.8rem 4.4rem",
	backgroundPosition: "left 1.6rem center",
	border: "0.1rem solid var(--slate-gray)"
});

export const inputUserIcon = css({
	backgroundImage: `url("data:image/svg+xml,%0A%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M39.9031 39.9031C50.9264 39.9031 59.8547 30.9748 59.8547 19.9516C59.8547 8.92833 50.9264 0 39.9031 0C28.8799 0 19.9516 8.92833 19.9516 19.9516C19.9516 30.9748 28.8799 39.9031 39.9031 39.9031ZM39.9031 49.8789C26.5855 49.8789 0 56.5627 0 69.8305V79.8063H79.8063V69.8305C79.8063 56.5627 53.2208 49.8789 39.9031 49.8789Z' fill='%236a6a6a'/%3E%3C/svg%3E%0A");`
});

export const inputPhoneIcon = css({
	backgroundImage: `url("data:image/svg+xml,%0A%3Csvg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M64.92 49.04L54.76 47.88C52.32 47.6 49.92 48.44 48.2 50.16L40.84 57.52C29.52 51.76 20.24 42.52 14.48 31.16L21.88 23.76C23.6 22.04 24.44 19.64 24.16 17.2L23 7.12C22.52 3.08 19.12 0.0400009 15.04 0.0400009H8.12001C3.60001 0.0400009 -0.15999 3.8 0.12001 8.32C2.24001 42.48 29.56 69.76 63.68 71.88C68.2 72.16 71.96 68.4 71.96 63.88V56.96C72 52.92 68.96 49.52 64.92 49.04Z' fill='%236a6a6a'/%3E%3C/svg%3E%0A")`
});

export const buttonRegular = css([
	buttonBase,
	{
		backgroundColor: "#fff",
		color: "var(--dark-gray)",
		borderColor: "var(--slate-gray)",

		":hover": {
			backgroundColor: "#e3e3e3"
		},

		":active": {
			backgroundColor: "#d1d7db"
		}
	}
]);

export const buttonDanger = css([
	buttonBase,
	{
		color: "#fff",
		borderColor: "#ab091e",
		backgroundColor: "#ab091e",

		":hover": {
			backgroundColor: "#910618"
		},

		":active": {
			backgroundColor: "#7e0515"
		}
	}
]);
