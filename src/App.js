import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>

        <Route exact path="/" element={<Home/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/newproject" element={<NewProject/>} />
      </Routes>
      <Footer/>
    </Router>
)}

export default App;
