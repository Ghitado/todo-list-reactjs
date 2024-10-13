import styled from "styled-components";

export const Div = styled.div`
	display: flex;
	margin: 5px;
	padding: 5px;
	border-radius: 10px;
	background-color: rgb(65, 63, 63);
`;

export const Select = styled.select`
	border: none;
	border-radius: 5px;
	background-color: rgba(0, 0, 0, 0.25);
	color: whitesmoke;
	font-size: 15px;
	cursor: pointer;
	&:focus-within {
	}
	& option {
		background-color: rgba(0, 0, 0, 0.75); /* Default option background color */
		color: white;
	}
`;
