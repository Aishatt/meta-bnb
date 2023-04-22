import logo from '/src/assets/logo.png'

export default function Header() {
    return(
        <div className='header-container'>
            <img src={logo} className='logo' alt='meta bnb logo' height="30px" />
            <ul className='menu-items'>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Place to stay</a>
                </li>
                <li>
                    <a href="">NFTs</a>
                </li>
                <li>
                    <a href="">Community</a>
                </li>
            </ul>
            <button className='wallet-button'>Connect wallet</button>
            {/*POP-UP!*/}
        </div>
    )
}