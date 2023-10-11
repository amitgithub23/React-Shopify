import './navbarr.css'
import logo from './Media/logo.png'
import React from 'react'
import { GrSearch } from 'react-icons/gr';
import { BsMic ,BsCart3} from 'react-icons/bs';

const Navbarr = () => {
  return (
    <div className='nav'>
        <div className='main-nav'>

      
        <div className='nav-logo'>
         <img src={logo} alt="" srcset="" />
        </div>
        <div className='searchbar'>
            <input type="text" style={{width:"80%"}} placeholder='Search in Shopify'/>
            <div className='search-button'>
                <button style={{backgroundColor:'rgb(79, 190, 190)', fontSize:'x-large', borderColor:'rgb(79, 190, 190)'}}><GrSearch/>
              </button>
              <button  style={{backgroundColor:'rgb(79, 190, 190)', borderColor:'rgb(79, 190, 190)',fontSize:'x-large'}}>  <BsMic/> </button>
            
            </div>
        </div>
   
              
                <div className='lastpart'>
                    <button  className='cart'>

                        <BsCart3 className='cart-logo'/>
                    </button>
                         <p >
                         Free Shipping <br />
                         Over ₹200
                         </p>
                </div>

        
                </div>
    </div>
  )
}

export default Navbarr
