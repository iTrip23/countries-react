import React from 'react';
import './search.css';

const Search = ({ searchValue, setSearchValue, themeToggle }) => {
	const handleEvent = (event) => setSearchValue(event.target.value);
	return (
		<section className='search-filter-container'>
			<div className={themeToggle ? 'search-component' : 'search-component dark-theme'}>
				<i className={`fas fa-search search-logo ${themeToggle ? '' : 'dark-theme'}`}></i>
				<input type='search' name='search' value={searchValue} onChange={handleEvent} className={themeToggle ? 'search-bar' : 'search-bar dark-theme'} placeholder='Search for country...' />
			</div>
			<div className={`filter-component ${themeToggle ? '' : 'dark-theme'}`}>
				<p>Filter by Region</p>
				<i className="fas fa-chevron-down"></i>
				<ul>
					<li>Africa</li>
					<li>America</li>
					<li>Asia</li>
					<li>Europe</li>
					<li>Oceania</li>
				</ul>
			</div>
		</section>
	)
}

export default Search