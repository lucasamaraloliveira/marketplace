import React from 'react'
import './Hero.css'
import Cart from '../../../assets/cart-hero.png'

function Hero() {
  return (
    <div className='container'>
        <div className='container-hero'>
            <div className='hero'>
                <div className='hero-text'> 
                    <h1>Special Product</h1>
                <div className='hero-paragraph'>
                    <p>Non enim eu excepteur cupidatat consectetur do ea est reprehenderit 
                    incididunt irure veniam cupidatat est non amet. 
                    Enim duis aute tempor laboris ipsum dolore non.
                    </p>
                </div>
                    <button className='hero-button'>Shop now!</button>
                </div>
        
    </div>
                <div className='hero-image'> <img src= {Cart} alt="" /></div>
        </div>
    </div>
  )
}

export default Hero