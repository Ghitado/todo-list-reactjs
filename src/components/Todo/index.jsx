import PropTypes from "prop-types";
import greenCheck from "../../assets/green-check-mark.png";
import redCross from "../../assets/red-cross-mark.png";
import trashCan from "../../assets/trash-can-mark.png";
import { Actions, Div, Image, Text } from "./index.styled";

export const Todo = ({ todo, completeTodo, removeTodo }) => {
	const { id, text, isCompleted } = todo;

	return (
		<Div done={isCompleted}>
			<Text done={isCompleted}>{text}</Text>
			<Actions>
				<Image
					src={isCompleted ? redCross : greenCheck}
					onClick={() => completeTodo(id)}
				/>
				<Image src={trashCan} onClick={() => removeTodo(id)} />
			</Actions>
		</Div>
	);
};

Todo.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.number,
		text: PropTypes.string,
		isCompleted: PropTypes.bool,
	}).isRequired,
	completeTodo: PropTypes.func,
	removeTodo: PropTypes.func,
};
