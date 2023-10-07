
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Layout from './Components/Layout/Layout'

function App({handleBookSeats}) {

  return (
    <>
    <div>
      <Header/>
      <Layout/>
      <Footer onBookSeats={handleBookSeats} />
      {/* <Header/>
      <SeatSelector/> */}
    </div>
    </>
  )
}

export default App
