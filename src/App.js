

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Drink from './pages/Drink';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/menu' exact element={ <Menu/> } />
      <Route path='/drink' exact element={ <Drink/> } />
      <Route path='/contact' exact element={ <Contact/> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
