
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
import ContactForm from './componets/demo';
import Graph from './componets/graph';
import Service from './componets/service';
import Rackleafblog from './componets/rackleafblog';
import Morefaq from './componets/morefaq';
import PricingSection from './componets/pricing';
import SinglePost from './componets/singaldata';






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
      <Route path='/contact' element={<ContactForm/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/blog' element={<Rackleafblog/>} />
      <Route path='/morefaq' element={<Morefaq/>} />
      <Route path='/price' element={<PricingSection/>} />
      <Route path='/singal' element={<SinglePost/>} />
    </Routes>
    <Footer2/>
    </BrowserRouter>

  
    {/* <Footer2/> */}
    
 
   
    
 
   
   </>
  );
}

export default App;
