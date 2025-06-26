
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Homepage from './componets/homepage';
import Navbar from './componets/tom';
import Footer from './componets/footer';
import Login from './componets/login';
import Signup from './componets/sign';
import SignupPage from './componets/local';
import Footer2 from './componets/local';
import Aboutpage from './componets/about';
import ClientTestimonials from "./componets/demo"






function App() {
  return (
   <>
    <BrowserRouter>
    <Navbar/>
    <Routes >
      <Route path='/'  element={<Homepage/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/sign' element={<Signup/>} />
      <Route path='/about' element={<Aboutpage/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  
    
    {/* <Footer2/> */}
    
 
   
    
 
   
   </>
  );
}

export default App;
