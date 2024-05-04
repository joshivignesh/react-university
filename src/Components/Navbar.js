import { Link } from 'react-router-dom';
function Navbar(){
        return (
            <nav className="header">
                <ul className="navbar-nav mr-auto">
                    <li><Link to='/' className="nav-link"> Home </Link></li>
                </ul>
            </nav>         
            );
}
export default Navbar;