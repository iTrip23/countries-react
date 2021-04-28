import React from 'react';
import CountryCard from './CountryCard.js';

const CountriesContainer = ({ countries }) => {
	return (
		<section className='countries-card-container'>
			{countries.map((country, index) => <CountryCard key={country.numericCode} country={country} />)}
		</section>
	)
}

export default CountriesContainer;