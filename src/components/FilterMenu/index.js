import React, { useState } from 'react';
import CheckBox from '../CheckBox';
import './style.css';

function FilterMenu(props) {
	const [isChecked, setIsChecked] = useState([]);
	const handleToggle = (element) => {
		const currIndex = isChecked.indexOf(element);
		const newChecked = [...isChecked];

		if (currIndex === -1) {
			newChecked.push(element);
		} else {
			newChecked.splice(currIndex, 1);
		}
		setIsChecked(newChecked);
		props.handleFilters(newChecked);
	};
	const filterOptions = () => {
		const checkboxArray = [];
		props.content.forEach((element) => {
			checkboxArray.push(
				<div className="checkbox-row">
					<CheckBox
						key={element}
						filter={props.filter}
						element={element}
						handleToggle={handleToggle}
						isChecked={isChecked}
					/>
				</div>
			);
		});
		return checkboxArray;
	};

	return <div className="form-container">{filterOptions()}</div>;
}
export default FilterMenu;
