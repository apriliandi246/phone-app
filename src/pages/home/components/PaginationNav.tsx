/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react/macro";

interface Props {
	currentPage: number;
	totalContacts: number;
	endPagination: number;
	onPaginate: React.Dispatch<React.SetStateAction<number>>;
}

function PaginationNav({ currentPage, totalContacts, endPagination, onPaginate }: Props) {
	return (
		<nav css={paginatioNav.self}>
			{currentPage !== 1 && (
				<button type="button" onClick={() => onPaginate((prevState) => prevState - 1)}>
					Prev
				</button>
			)}

			{endPagination <= totalContacts && (
				<button type="button" onClick={() => onPaginate((prevState) => prevState + 1)}>
					Next
				</button>
			)}
		</nav>
	);
}

const paginatioNav = {
	self: css({
		gap: "2rem",
		display: "flex",
		marginTop: "2rem",
		alignItems: "center",
		justifyContent: "center"
	})
};

export default PaginationNav;
