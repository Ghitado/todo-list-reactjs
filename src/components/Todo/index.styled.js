import styled from "styled-components";

export const Div = styled.div`
	display: grid;
	max-width: 400px;
	min-width: 400px;
	grid-template-columns: 8fr 3fr;
	margin: 10px;
	padding: 10px;
	border-radius: 10px;
	background-color: ${(props) =>
		props.done ? "rgb(65, 63, 63)" : "rgb(82, 80, 80)"};
`;

export const Text = styled.span`
	word-break: break-all;
	text-decoration-line: ${(props) => (props.done ? "line-through" : "none")};
`;

export const Image = styled.img`
	width: 25px;
	cursor: pointer;
`;

export const Actions = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;
