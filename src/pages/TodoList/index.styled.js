import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	justify-items: center;
	padding: 50px;
	border-radius: 10px;
	background-color: rgba(56, 56, 56, 0.829);
	color: whitesmoke;
	text-align: center;
`;

export const List = styled.div`
	max-height: 50vh;
	overflow-y: auto;
	&::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px grey;
		border-radius: 10px;
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		background: red;
		border-radius: 10px;
	}

	/* Handle on hover */
	&::-webkit-scrollbar-thumb:hover {
		background: #b30000;
	}
`;
