import React from 'react';
import './style.css';

function SearchBar(props) {
	const { inputValue, handleSearch } = props;
	const handleOnChange = (event) => {
		handleSearch(event.target.value);
	};
	return (
		<div>
			<input
				className="search"
				type="text"
				value={inputValue}
				onChange={handleOnChange}
				placeholder="Search Colleges"
			></input>
		</div>
	);
}
export default SearchBar;
