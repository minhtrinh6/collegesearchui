import React from 'react';
import Card from '../Card';
import './style.css';

function CardTable(props) {
	var { searchedSchools } = props;
	const renderCards = () => {
		let cards = [];
		searchedSchools.forEach((school, index) => {
			cards.push(
				<div key={index} className="col">
					<Card {...school} />
				</div>
			);
		});
		return cards;
	};

	return <div className="table">{renderCards()}</div>;
}
export default CardTable;
