import learn from '/src/assets/group.png'

export default function LearnMore() {
    return(
        <div className='more-container'>
            <div className='more-text'>
                <h2>Metabnb NFTs</h2>
                <p>
                    Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                </p>
                <button>
                    Learn more
                </button>
            </div>
            <div className='more-image'>
                <img src={learn} alt="" />
            </div>
        </div>
    )
}