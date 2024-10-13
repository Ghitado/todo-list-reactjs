import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Form, Input } from "./index.styled";

export const TodoForm = ({ addTodo }) => {
	const [newTodoText, setNewTodoText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (newTodoText.trim()) {
			addTodo(newTodoText);
			setNewTodoText("");
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				type="text"
				placeholder="O que tenho para fazer..."
				value={newTodoText}
				onChange={(e) => setNewTodoText(e.target.value)}
			/>
			<Button type="submit">+</Button>
		</Form>
	);
};

TodoForm.propTypes = {
	addTodo: PropTypes.func,
};
