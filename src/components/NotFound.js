import React from 'react'
import image from '../images/404.jpg'

export default function NotFound() {
  return (
    <div className='notFound'>
      <img src={image} alt='Page Not Found'/>
      <h1>Page Not Found</h1>

    </div>
  )
}
