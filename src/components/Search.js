import React from 'react';

const Search = () => {
	return (
		<section className='search-filter-container'>
			<div className='search-component'>
				<i className="fas fa-search search-logo"></i>
				<input type='search' name='search' className='search-bar' placeholder='Search for country...' />
			</div>
			<div className='filter-component'>
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