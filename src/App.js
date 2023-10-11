
// import './App.css';

import Home from './Components/Home';

import Navbarr from './Components/Navbarr';
import About from './Components/About';
import Products from './Components/Products';
import { BrowserRouter } from 'react-router-dom';
import NewKids from './Components/NewKids';
import Reviews from './Components/Reviews';
import Footer from './Components/Footer';
import './Components/menu.css'
import { Link } from 'react-scroll'


function App() {
  return (
    <>
    <div style={{height:'auto'}}>

    <BrowserRouter >
    <Navbarr/>

  {/* /////////////////////////////////////////MENU/////////////////////////////// */}
<div className='main'>
    <div className='main-in'>
    
       <ul className='left-menu'>
        <li> <Link className='li-link' to='home'   smooth={true} offset={-90} duration={600}  >Home</Link></li>
        <li> <Link className='li-link' to="products" smooth={true} offset={-40} duration={600}  >Product</Link></li>
        <li> <Link className='li-link' to='aboutus'  smooth={true} offset={-70} duration={600}   >About Us</Link></li>
        <li> <Link className='li-link' to='contact'  smooth={true} offset={0} duration={600}  >Contact Us</Link></li>
   
       </ul>
        
    
       {/* <Home/>
    <About/>
    <Products/> */}
 


    <ul className='right-part'>
     <li><a style={{marginRight:'20px'}} href="">Login</a>
     <ul className='login' >
      <li>
        <input type="text" placeholder='Username'/>      </li>
        <li> 
          <input type="passward"  placeholder='Passward'/>
        </li>
        <li>
          <button style={{backgroundColor:'rgb(40, 129, 129)', borderColor:'green'}}>Login</button>
        </li>
     </ul>
     </li>
     <li>   <a href="">Sign Up</a>
     <ul className='login' >
      <li>
        <input type="text" placeholder='Username'/>      </li>
        <li style={{display:'flex', flexDirection:'column'}}> 
        <label style={{fontSize:'15px', color:'white'}} for='dob'>Date of Birth</label>
          <input type='date' placeholder='Date of Birth'></input></li>
        <li > 
         
          <input type="passward" id='dob' placeholder='Passward'/>
        </li>
        <li>
          <button style={{backgroundColor:'rgb(40, 129, 129)', borderColor:'green'}}>Sign Up</button>
        </li>
     </ul>
      </li>
  
    </ul>
    </div>                       

    </div>
   
   <Home/>
    <About/>
    <Products/>
 <NewKids/>
<Reviews/>
<Footer/>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
