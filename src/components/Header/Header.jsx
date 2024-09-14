import React from 'react';
import './Header.scss';

const Header = () => {
	return (
		<header className="header">
			<img className="header__logo" src="/colored-book.png" alt="logo livre" />
			<h1 className="header__title">L'imaginaire</h1>
		</header>
	);
};

export default Header;
