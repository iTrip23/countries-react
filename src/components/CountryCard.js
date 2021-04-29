import React from 'react';
import './countryCard.css';

const CountryCard = ({ country, themeToggle }) => {
	return (
		<div className={themeToggle ? 'country-card' : 'country-card dark-theme'}>
			<img src={country.flag} className="country-flag" alt={`Loading ${country.name} flag`} />
			<div className="card-body">
				<h4 className='country-name'>{country.name}</h4>
				<p className="country-info">Population: <span>{country.population}</span></p>
				<p className="country-info">Region: <span>{country.region}</span></p>
				<p className="country-info">Capital: <span>{country.capital}</span></p>
			</div>
		</div>
	)
}

export default CountryCard;


