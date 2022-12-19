import React from 'react'
import './Category.css'
import Card from '../../Card1'
import Card2 from '../../Card2'

function Category() {
  return (
    <div className='container-category'>
        <div className='container-category-title'>
            <h2>Category 1 </h2>
            <a href="">See more</a>
        </div>
            <Card/>
            <div className='container-category-title'>
            <h2>Category 2 </h2>
            <a href="">See more</a>
        </div>
            <Card2/>
            
        
        
    </div>
  )
}

export default Category