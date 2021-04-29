import React from 'react';

const Header = () => (
	<header>
		<h5 className='header-title'>Where in the world?</h5>
		<button type='button' className='button-toggle'>
			<i className="fas fa-moon"></i>
			<i className="far fa-moon"></i>
			Dark Mode</button>
	</header>
)

export default Header;