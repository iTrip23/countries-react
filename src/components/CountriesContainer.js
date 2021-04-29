import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard.js';

const CountriesContainer = ({ themeToggle }) => {
	const [countries, setCountries] = useState([]);
	useEffect(() => fetchData(), []);
	const fetchData = async () => {
		const res = await fetch('https://restcountries.eu/rest/v2/all')
		const countries = await res.json()
		setCountries(countries);
	}

	return (
		<div>
			<h2 className={countries.length === 0 ? 'loading' : 'loading loaded'}>Loading Countries ...</h2>
			<section className='countries-card-container'>
				{countries.map((country, index) => <CountryCard key={country.numericCode} country={country} themeToggle={themeToggle} />)}
			</section>
		</div >
	)
}

export default CountriesContainer;