import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	justify-content: center;
	padding: 25px 0 10px 0;
`;

export const Input = styled.input`
	border: none;
	border-radius: 5px;
	width: 300px;
	height: 40px;
	padding-left: 10px;
	break-inside: auto;
`;

export const Button = styled.button`
	border: none;
	border-radius: 5px;
	background-color: rgba(0, 0, 0, 0.25);
	color: whitesmoke;
	font-size: 35px;
	padding: 0 13px;
	cursor: pointer;
	&:hover {
		background-color: rgba(0, 0, 0, 0.5);
	}
`;
