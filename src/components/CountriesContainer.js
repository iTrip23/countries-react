import React from 'react';
import CountryCard from './CountryCard.js';

const CountriesContainer = ({ countries, themeToggle }) => {
	return (
		<div>
			<section className='countries-card-container'>
				{countries.map((country, index) => <CountryCard key={country.numericCode} country={country} themeToggle={themeToggle} />)}
			</section>
		</div>
	)
}

export default CountriesContainer;