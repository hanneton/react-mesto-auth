import { Link } from "react-router-dom";

import { useLocation } from 'react-router-dom';

function Header(props) {
    const currentLocation = useLocation();
    return (
        <header className="header">
            <Link to="/" className="logo header__logo" />
            <div>
                <Link to={`/${props.isLoggedIn
                    ? ''
                    : `sign-${currentLocation.pathname === '/sign-up'
                        ? 'in'
                        : 'up'}`}`}
                    className="header__link"
                >
                    {props.isLoggedIn
                        ? props.email
                        : currentLocation.pathname === '/sign-up'
                            ? 'Войти'
                            : 'Регистрация'}
                </Link>
                {props.isLoggedIn && <Link to="/sign-in" onClick={props.signOut} className="header__link">Выйти</Link>}
            </div>
        </header>
    )
}

export default Header;