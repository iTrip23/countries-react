import React from 'react';
import './countryCard.css';
import { Link } from 'react-router-dom';

const CountryCard = ({ country, themeToggle, setID }) => {
	const handleID = () => setID(country.alpha3Code)

	return (
		<Link to='/info' style={{ textDecoration: 'none' }} onClick={handleID}>
			<div className={themeToggle ? 'country-card' : 'country-card dark-theme'}>
				<img src={country.flag} className="country-flag" alt={`Loading ${country.name} flag`} />
				<div className="card-body">
					<h4 className='country-name-card'>{country.name}</h4>
					<p className={themeToggle ? 'country-infoM' : 'country-infoM dark-theme'}>Population: <span>{country.population}</span></p>
					<p className={themeToggle ? 'country-infoM' : 'country-infoM dark-theme'}>Region: <span>{country.region}</span></p>
					<p className={themeToggle ? 'country-infoM' : 'country-infoM dark-theme'}>Capital: <span>{country.capital}</span></p>
				</div>
			</div>
		</Link>
	)
}

export default CountryCard;


