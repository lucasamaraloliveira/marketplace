import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero'
import BestSeller from './components/layout/BestSeller'
import Category from './components/layout/Category'
// import Card from './components/Card'


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <BestSeller/>
      <Category/>
      {/* <Card/> */}
      
    </div>
  )
}

export default App
