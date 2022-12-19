import React from 'react'
import './Card2.css'
import Table from '../../assets/table.png'
import Table2 from '../../assets/table2.png'
import Cactus1 from '../../assets/cactus1.png'
import Cactus2 from '../../assets/cactus2.png'

function Card() {
  return (
    <div className='card2-container'>
    <div className='card2-layout'>
      <div className='container-card2'>
        <div className='card2'>
          <img src={Table} alt="" />
        </div> 
          <div className='card2-details'>
            <h2>Product title</h2>
            <p className='card2-price'>$230,00</p>
            <a href=""><button>Comprar</button></a>
        </div>         
      </div>
      <div className='container-card2'>
        <div className='card2'>
          <img src={Table2} alt="" />
        </div> 
          <div className='card2-details'>
            <h2>Product title</h2>
            <p className='card2-price'>$230,00</p>
            <a href=""><button>Comprar</button></a>
        </div>     
      </div>
      <div className='container-card2'>
        <div className='card2'>
          <img src={Cactus1} alt="" />
        </div> 
          <div className='card2-details'>
            <h2>Product title</h2>
            <p className='card2-price'>$230,00</p>
            <a href=""><button>Comprar</button></a>
        </div>     
      </div>
      <div className='container-card2'>
        <div className='card2'>
          <img src={Cactus2} alt="" />
        </div> 
          <div className='card2-details'>
            <h2>Product title</h2>
            <p className='card2-price'>$230,00</p>
            <a href=""><button>Comprar</button></a>
        </div>     
      </div>
      </div>    
    </div>
  )
}

export default Card