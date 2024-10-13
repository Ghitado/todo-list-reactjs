import { useState } from "react";
import { Filter } from "../../components/Filter";
import { Todo } from "../../components/Todo";
import { TodoForm } from "../../components/TodoForm";
import { Container, List } from "./index.styled";

export const TodoList = () => {
	const [todos, setTodos] = useState([
		{ id: 1, text: "Comer batata", isCompleted: false },
		{ id: 2, text: "Estudar React", isCompleted: true },
		{ id: 3, text: "Ir à academia", isCompleted: false },
	]);

	const [filter, setFilter] = useState("all");

	const filteredTodos = todos.filter((todo) => {
		if (filter === "incomplete") return !todo.isCompleted;
		if (filter === "completed") return todo.isCompleted;
		return true;
	});

	console.log("Render");

	const addTodo = (text) => {
		const newTodos = [
			...todos,
			{
				id: Math.floor(Math.random() * 1000),
				text,
				isCompleted: false,
			},
		];
		setTodos(newTodos);
	};

	const completeTodo = (id) => {
		const newTodos = [...todos];
		newTodos.map((todo) =>
			todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
		);
		setTodos(newTodos);
	};

	const removeTodo = (id) => {
		const filteredTodos = todos.filter((todo) =>
			todo.id !== id ? todo : null
		);
		setTodos(filteredTodos);
	};

	return (
		<Container>
			<h1>Todo List</h1>

			<TodoForm addTodo={addTodo} />

			<Filter filter={filter} setFilter={setFilter} />

			<List>
				{filteredTodos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
						completeTodo={completeTodo}
						removeTodo={removeTodo}
					/>
				))}
			</List>
		</Container>
	);
};
