import React from 'react';

function CheckBox(props) {
  const {filter, element, isChecked, handleToggle } = props;
	return (
		<label htmlFor={element}>
			<input
				type="checkbox"
				id={element}
				name={element}
				value={element}
        checked={isChecked.includes(element)}
				onChange={() => handleToggle(element)}
			/>
			{filter(element)}
		</label>
	);
}
export default CheckBox;
