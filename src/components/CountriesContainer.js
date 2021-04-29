import React from 'react';
import CountryCard from './CountryCard.js';

const CountriesContainer = ({ countries }) => {
	return (
		<div>
			<section className='countries-card-container'>
				{countries.map((country, index) => <CountryCard key={country.numericCode} country={country} />)}
			</section>
		</div>
	)
}

export default CountriesContainer;