import React from 'react'
import './productmenu.css'
import { Link } from 'react-router-dom'
import Mens from './Mens'
import Womens from './Womens'
import Kids from './Kids'
import Weeding from './Weeding'
const ProductMenu = () => {
  return (
    <>
    <div className='menu-1'>
      <ul>
<li>

<Link className='link-style' to='men'  component={Mens}>Mens</Link>
</li>
<li>

      <Link className='link-style' to='women'  component={Womens}>Womens</Link>
</li>
<li>

      <Link className='link-style' to='kids'  component={Kids}>Kids</Link>
</li>
<li>

      <Link className='link-style' to='weeding'  component={Weeding}>Weeding</Link>
</li>
      </ul>

    </div>
    </>
  )
}

export default ProductMenu
