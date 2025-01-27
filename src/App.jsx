
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {TopNav} from './components/TopNav';
import { Home , About, Contact, Services } from './components/pages';


function App() {
  return (
    <div className="App">  
      <TopNav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </div>
  );
}

export default App;
