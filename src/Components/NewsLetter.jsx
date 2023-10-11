import './newsletter.css'

import React from 'react'

const NewsLetter = () => {
  return (
    <div className='news-main'>
      <p className='news-heading'> Join Oue Newsletter</p>
      <br />
      <p className='news-mid'>
        Want to informed about new shopping tips fashions and offers
      </p>
      <br />
      <div className='news-last'>
    <input type='email' placeholder='Email Address' />
      <button> <p className='sub'> Suscribe</p></button>
      </div>
    </div>
  )
}

export default NewsLetter
