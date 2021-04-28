import React from 'react';

const Search = () => {
	return (
		<section className='container search-component'>
			<div className='row m-0'>
				<div className='col-11 mx-auto'>
					<i className="fas fa-search col-1 search-logo"></i>
					<input type='search' name='search' className='col-11 search-bar' placeholder='Search for country...' />
				</div>
			</div>
		</section>
	)
}

export default Search