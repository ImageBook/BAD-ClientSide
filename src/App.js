import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Careers from './components/Careers/Careers';
import Home from './components/Home/Home';
import OurTeam from './components/OurTeam/OurTeam';
import Services from './components/Services/Services';

function App() {
  return (
    <div className='font max-w-7xl mx-auto'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/about/team' element={<OurTeam></OurTeam>}></Route>
        <Route path='/about/careers' element={<Careers></Careers>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
    </div>
  );
}

export default App;
