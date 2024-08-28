import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An ecommerce website is an online platform that facilitates buying and selling of
            products or services over the internet which serves
            as a virtual marketplace where businesses and individuals showcase their products.
        </p>
        <p>
            E-commerce websites typically display products or services as detailed descriptions,
            images, prices, and any available variables.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
