//import { Routes, Route } from 'react-router-dom';
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
      <div className='cards-container'>
        {cardData}
      </div>
      <Breaker />
      <LearnMore />
      <Footer />
      {/*<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breaker" element={<Breaker />} />
        <Route path="/products" element={
          <div className='cards-container'>
            {cardData}
          </div>} 
        />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/footer" element={<Footer />} />
        </Routes>*/}
    </>
  )
}

export default App
