
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './componets/homepage';
import Navbar from './componets/tom';
import Footer from './componets/footer';





function App() {
  return (
   <>
    <BrowserRouter>
    <Navbar/>
    <Routes >
      <Route path='/'  element={<Homepage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    
 
   
   </>
  );
}

export default App;
