import React from 'react';
import './search.css';

const Search = ({ searchValue, setSearchValue, themeToggle }) => {
	const handleEvent = (event) => setSearchValue(event.target.value);

	return (
		<section className='search-container'>
			<div className={themeToggle ? 'search-component' : 'search-component dark-theme'}>
				<i className={`fas fa-search search-logo ${themeToggle ? '' : 'dark-theme'}`}></i>
				<input type='search' name='search' value={searchValue} onChange={handleEvent} className={themeToggle ? 'search-bar' : 'search-bar dark-theme'} placeholder='Search for country...' />
			</div>
		</section>
	)
}

export default Search;