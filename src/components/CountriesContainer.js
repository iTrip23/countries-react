import React from 'react';
import CountryCard from './CountryCard.js';

const CountriesContainer = ({ countries, searchValue, themeToggle }) => {
	const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchValue.toLowerCase()))
	return (
		<div>
			<h2 className={countries.length === 0 ? 'loading' : 'loading loaded'}>Loading Countries ...</h2>
			<section className='countries-card-container'>
				{filteredCountries.map((country, index) => <CountryCard key={country.numericCode} country={country} themeToggle={themeToggle} />)}
			</section>
		</div >
	)
}

export default CountriesContainer;