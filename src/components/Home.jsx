import landing_img from '/src/assets/home.png'
export default function Home() {
    return(
        <div className='landing-container'>
            <div className='text'>
                <p className="text-header">
                    Rent a <span className="bold-text">Place</span> away from <span className="bold-text">Home</span> in the <span className="bold-text">Metaverse</span>
                </p>
                <p className="home-text">
                    We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                </p>
            </div>
            <div className='home-image'>
                <img src={landing_img} alt="" />
            </div>
        </div>
    )
}