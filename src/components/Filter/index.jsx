import PropTypes from "prop-types";
import { Div, Select } from "./index.styled";

export const Filter = ({ filter, setFilter }) => {
	return (
		<Div>
			<span>Ordernar por:&ensp;</span>
			<Select value={filter} onChange={(e) => setFilter(e.target.value)}>
				<option value="all">Todas</option>
				<option value="completed">Feitas</option>
				<option value="incomplete">Fazer</option>
			</Select>
		</Div>
	);
};

Filter.propTypes = {
	filter: PropTypes.string.isRequired,
	setFilter: PropTypes.func.isRequired,
};
