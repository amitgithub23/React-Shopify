import React from 'react'
import './product.css'
import { Route, Routes} from 'react-router-dom'
import Mens from './Products/Mens'
import Womens from './Products/Womens'
import Kids from './Products/Kids'
import Weeding from './Products/Weeding'
import Content from './Products/Content'
import ProductMenu from './Products/ProductMenu'



const Products = () => {
  return (
    <>
    <div name='products' className='product-body'>
    <p className='heading'>Our Products</p>
    <div className='product-outline'>
   
  <div className='product-menu'>

      <ProductMenu/>
  </div>
 <div className='product-content'> 

    <Routes >
    <Route path='/' Component={Content}>

    <Route path='/' Component={Mens}> </Route>
    <Route path='/men' Component={Mens}> </Route>
    <Route path='women' Component={Womens}> </Route>
    <Route path='kids' Component={Kids}> </Route>
    <Route path='weeding' Component={Weeding}> </Route>
    </Route>
    </Routes>
 </div>
    </div>
    </div>
    </>
  )
}

export default Products
