import logo from '/src/assets/logo.png'
import { NavLink } from 'react-router-dom';

export default function Header() {
    return(
        <nav className='header-container'>
            <img src={logo} className='logo' alt='meta bnb logo' height="30px" />
            <ul className='menu-items'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Place to stay</NavLink>
                </li>
                <li>
                    <NavLink to="/learnmore">NFTs</NavLink>
                </li>
                <li>
                    <NavLink to="/footer">Footer</NavLink>
                </li>
            </ul>
            <button className='wallet-button'>Connect wallet</button>
            {/*POP-UP!*/}
        </nav>
    )
}