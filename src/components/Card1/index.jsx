import React from "react";
import "./Card.css";
import Image1 from "../../assets/item.png";
import Image2 from "../../assets/item2.png";
import Image3 from "../../assets/item3.png";
import Image4 from "../../assets/item4.png";

function Card() {
  return (
    <div className="card-container">
      <div className="card-layout">
        <div className="container-card">
          <div className="card">
            <img src={Image1} alt="" />
          </div>
          <div className="card-details">
            <h2>Product title</h2>
            <p className="card-price">$230,00</p>
            <a href="">
              <div>
                <button>Comprar</button>
              </div>
            </a>
          </div>
        </div>

        <div className="container-card">
          <div className="card">
            <img src={Image2} alt="" />
          </div>
          <div className="card-details">
            <h2>Product title</h2>
            <p className="card-price">$230,00</p>
            <a href="">
              <button>Comprar</button>
            </a>
          </div>
        </div>

        <div className="container-card">
          <div className="card">
            <img src={Image3} alt="" />
          </div>
          <div className="card-details">
            <h2>Product title</h2>
            <p className="card-price">$230,00</p>
            <a href="">
              <button>Comprar</button>
            </a>
          </div>
        </div>
        <div className="container-card">
          <div className="card">
            <img src={Image4} alt="" />
          </div>
          <div className="card-details">
            <h2>Product title</h2>
            <p className="card-price">$230,00</p>
            <a href="">
              <button>Comprar</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
