import './MainPage.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from './Home.js';
import './MainPage.js';
import MainPage from './MainPage.js';

class Navbar extends Component {
    render() {
        return (
            <Router>
            <nav className="header">
                <ul className="navbar-nav mr-auto">
                    <li><Link to={'/'} className="nav-link"> Home </Link></li>
                    <li><Link to={'/MainPage'} className="nav-link">University List</Link></li>
                </ul>
                </nav>
                <Routes>
                    <Route exact path='/' component={Home} />
                    <Route path='/MainPage' component={MainPage} />
                   
                </Routes>
            </Router>
            );
    }
}

export default Navbar;