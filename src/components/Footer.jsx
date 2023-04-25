import footerlogo from '/src/assets/footerlogo.svg'
import facebook from '/src/assets/facebook.svg'
import instagram from '/src/assets/instagram.svg'
import twitter from '/src/assets/twitter.svg'

export default function Footer() {
    return(
        <div className="footer-container">
            <div>
                <img src={footerlogo} alt="metabnb logo" className='footer-logo'/>
                <div className='social-media'>
                    <img src={facebook} alt="facebook logo" />
                    <img src={instagram} alt="instagram logo" />
                    <img src={twitter} alt="twitter logo" />
                </div>
                <div>
                    <p>@ 2022 Metabnb</p>
                </div>
            </div>
            <ul>
                <li className='list-header'>Community</li>
                <li>NFT</li>
                <li>Tokens</li>
                <li>Landlords</li>
                <li>Discord</li>
            </ul>
            <ul>
                <li className='list-header'>Places</li>
                <li>Castle</li>
                <li>Farms</li>
                <li>Beach</li>
                <li>Learn more</li>
            </ul>
            <ul>
                <li className='list-header'>About us</li>
                <li>Road map</li>
                <li>Creators</li>
                <li>Career</li>
                <li>Contact us</li>
            </ul>
            
        </div>
    )
}