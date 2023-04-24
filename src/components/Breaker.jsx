import mbtoken from '/src/assets/breaker1.svg'
import metamask from '/src/assets/breaker2.svg'
import opensea from '/src/assets/breaker3.svg'

export default function Breaker() {
    return(
        <div>
            <div className='breaker-container'>
                <img src={mbtoken} alt="mbtoken logo" />
                <img src={metamask} alt="metamask logo" />
                <img src={opensea} alt="opensea logo" />
            </div>
            <div className='inspiration-title'>
                <h2>Inspiration for your next adventure</h2>
            </div>
        </div>

    )
}