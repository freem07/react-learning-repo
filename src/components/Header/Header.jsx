import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg" />
            <div className={classes.loginBlock} >
                { props.isAuth 
                    ? <div> {props.login}  - <button onClick={props.logout} >Log out</button></div>
                    : <NavLink to={'/login'} >Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;