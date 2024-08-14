import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
	return (
		<header className="header">
			<h1 className="header__title">L'imaginaire</h1>
			<nav className="header__nav">
				<NavLink className="header__nav-link" to={'/'}>
					<span>Accueil</span>
				</NavLink>
				<NavLink className="header__nav-link" to={'/auth/connexion'}>
					<i className="fa-solid fa-user"></i>
					<span>Me connecter</span>
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
