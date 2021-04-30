import React from 'react';
import Search from './Search.js';
import Filter from './Filter.js';

const SearchAndFilter = ({ searchValue, setSearchValue, themeToggle, setRegion, countries }) => {

	return (
		<section className='search-filter-container'>
			<Search themeToggle={themeToggle} searchValue={searchValue} setSearchValue={setSearchValue} />
			<Filter themeToggle={themeToggle} setRegion={setRegion} countries={countries} />
		</section>
	)
}

export default SearchAndFilter;