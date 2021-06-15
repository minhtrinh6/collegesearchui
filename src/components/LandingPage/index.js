import React, { useState } from 'react';
import Accordion from '../Accordion';
import CardTable from '../CardTable';
import schools from '../Data/ma_schools.json';
import { getHighestGrad, getLocale, getCCSizSet } from '../../lib/Dictionaries';
import Header from '../Header';
import SearchBar from '../SearchBar';
import './style.css';

function LandingPage() {
	const [searchedSchools, setSearchedSchools] = useState(schools);
	const [inputValue, setInputValue] = useState('');
	const [Filters, setFilters] = useState({
		HIGHDEG: [],
		LOCALE: [],
		CCSIZSET: [],
	});

	const highdegFilter = [0, 1, 2, 3, 4];
	const localeFilter = [11, 12, 13, 21, 22, 23, 31, 32, 33, 41, 42, 43];
	const carnegieFilter = [
		-2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
	];

	const showFilteredResults = (filters) => {
		var filteredSchools = [];
		if (
			filters.HIGHDEG.length === 0 &&
			filters.LOCALE.length === 0 &&
			filters.CCSIZSET.length === 0
		) {
			setSearchedSchools(schools);
			filteredSchools = schools;
		} else {
			filters.HIGHDEG.forEach((key) => {
				filteredSchools.push(
					...schools.filter((school) => {
						return school.HIGHDEG == key;
					})
				);
			});
			filters.LOCALE.forEach((key) => {
				filteredSchools.push(
					...schools.filter((school) => {
						return school.LOCALE == key;
					})
				);
			});
			filters.CCSIZSET.forEach((key) => {
				filteredSchools.push(
					...schools.filter((school) => {
						return school.CCSIZSET == key;
					})
				);
			});
			setSearchedSchools(filteredSchools);
		}
		return filteredSchools;
	};

	const handleFilters = (filters, category) => {
		const newFilters = { ...Filters };
		newFilters[category] = filters;

		showFilteredResults(newFilters);
		setFilters(newFilters);
	};

	const handleSearch = (inputValue) => {
		setInputValue(inputValue);
		const filterResults = showFilteredResults(Filters);
		const searchResults = filterResults.filter((school) => {
			return school.INSTNM.toLowerCase().includes(inputValue.toLowerCase());
		});
		setSearchedSchools(searchResults);
	};

	return (
		<div className="landing-page-container">
			<Header />
			<div className="searchbar-container">
				<SearchBar
					inputValue={inputValue}
					handleSearch={(inputValue) => handleSearch(inputValue)}
				/>
			</div>
			<div className="content-container">
				<div className="filterMenu-container">
					<Accordion
						title={'Sort by Highest Degree Offered'}
						content={highdegFilter}
						filter={getHighestGrad}
						handleFilters={(filters) => handleFilters(filters, 'HIGHDEG')}
					/>
					<Accordion
						title={'Sort by Locale'}
						content={localeFilter}
						filter={getLocale}
						handleFilters={(filters) => handleFilters(filters, 'LOCALE')}
					/>
					<Accordion
						title={'Sort by Size and Setting'}
						content={carnegieFilter}
						filter={getCCSizSet}
						handleFilters={(filters) => handleFilters(filters, 'CCSIZSET')}
					/>
				</div>
				<div className="cardtable-container">
					<CardTable searchedSchools={searchedSchools} />
				</div>
			</div>
		</div>
	);
}
export default LandingPage;
