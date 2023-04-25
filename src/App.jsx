import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Breaker from './components/Breaker'
import data from './InspirationData'
import Card from './components/Card'
import LearnMore from './components/LearnMore'
import Footer from './components/Footer'

function App() {

  const cardData = data.map(item => {
    return(
      <Card
        key={item.id}
        name={item.name}
        cost={item.cost}
        distance={item.distance}
        availability={item.availability}
        img={item.img}
      />
    )
  })

  return (
    <>
      <Header />
      <Home />
      <Breaker />
      <div className='cards-container'>
        {cardData}
      </div>
      <LearnMore />
      <Footer />
    </>
  )
}

export default App
