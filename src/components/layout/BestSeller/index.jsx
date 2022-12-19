import React from 'react'
import './BestSeller.css'
import Handbag from '../../../assets/handbag.png'
import Dress from '../../../assets/dress.png'
import Shirt from '../../../assets/shirt.png'
import Glass from '../../../assets/glass.png'
import Clock from '../../../assets/clock.png'
import Cap from '../../../assets/cap.png'
import Wallet from '../../../assets/wallet.png'
import Umbrella from '../../../assets/umbrella.png'

function BestSeller() {
  return (
    <div className='container-best'>
        <div className='container-hero-categories'>
            <div className='best-seller'> 
                    <ul>
                        <li><a href=""><img src={Handbag} alt="" /> <p>Sit esse ull</p></a></li>
                        <li><a href=""><img src={Dress} alt="" /> <p>Aliquip sunt</p></a></li>
                        <li><a href=""><img src={Shirt} alt="" /> <p>Dolore labo</p></a></li>
                        <li><a href=""><img src={Glass} alt="" /> <p>Eiusmod</p></a></li>
                        <li><a href=""><img src={Clock} alt="" /> <p>Cupidatat e</p></a></li>
                        <li><a href=""><img src={Cap} alt="" /> <p>Aliquip ulla</p></a></li>
                        <li><a href=""><img src={Wallet} alt="" /> <p>Lorem quis</p></a></li>
                        <li><a href=""><img src={Umbrella} alt="" /> <p>Nostrud vel</p></a></li>
                        
                    </ul>
            </div>
        </div>
    </div>
  )
}

export default BestSeller