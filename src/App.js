import './App.css';
import { useState, useEffect } from 'react';
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import MobileNav from './components/MobileNav.jsx';
import Services from './components/Services.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';
import CTA from './components/CTA.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Gallery from './components/Gallery.jsx';
import ThankYou from './components/ThankYou.jsx';

function App() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1600);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div>
        {isMobile ? <MobileNav/> : <NavBar/>}
        <Routes>
            <Route path='/' element={[<CTA/>, <Testimonials/>,<Services/>]}/>
            <Route path='/about' element={[<About/>]}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/thankyou' element={<ThankYou/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
