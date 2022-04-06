import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <HowItWorks/>
      <Footer/>
    </div>
  );
}

export default App;
