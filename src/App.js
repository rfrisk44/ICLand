import './App.css';
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Services from './components/Services.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';
import CTA from './components/CTA.jsx';

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={[<NavBar/>,<CTA/>,<Services/>,<Testimonials/>,<Footer/>]}/>
        </Routes>
    </div>
  );
}

export default App;
