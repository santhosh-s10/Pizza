import React from 'react'
import pizza1 from './assets/focaccia.avif'
import pizza2 from './assets/margherita.png'
import pizza3 from './assets/spinaci.avif'
import pizza4 from './assets/funghi.avif'
import pizza5 from './assets/salamino.avif'
import pizza6 from './assets/prosciutto.avif'
import './Pizza.css';
import Footer from './Footer'

const Pizza = () => {
  return (
    <div id='full-body'>
        <div id='title-container'>
        <p id='title-card'>- FAST &nbsp; REACT &nbsp; PIZZA &nbsp; CO. -</p>
        <p id='menu-card'>OUR MENU</p>
        <p id='title-desc'>Authentic Italian Cuisine. 6 creative dishes to choose from. All from our stone oven, organic and finger licking delicious</p>
        </div>
        <div id='pizza-container'>
            <div id='pizza-inner-container'>
                <img src={pizza1} alt="" />
                <div id='pizza-details'>
                    <p id='pizza-name'>Focaccia</p>
                    <p>Ingredients: Bread with italian olive oil and rosemary </p>
                    <p id='pizza-quantity'>6</p>
                </div>     
            </div>
            <div id='pizza-inner-container'>
                <img src={pizza2} alt="" />
                <div id='pizza-details'>
                    <p id='pizza-name'>Pizza Margherita</p>
                    <p>Ingredients: Tomato and mozarella</p>
                    <p id='pizza-quantity'>10</p>
                </div>
            </div>
            <div id='pizza-inner-container'>
                <img src={pizza3} alt="" />
                <div id='pizza-details'>
                    <p id='pizza-name'>Pizza Spinaci</p>
                    <p>Ingredients: Tomato, mozarella, spinach, and ricotta cheese</p>
                    <p id='pizza-quantity'>12</p>
                </div>
            </div>
            <div id='pizza-inner-container'>
                <img src={pizza4} alt="" />
                <div id='pizza-details'>
                    <p id='pizza-name'>Pizza Funghi</p>
                    <p>Ingredients: Tomato, mozarella, mushrooms, and onion</p>
                    <p id='pizza-quantity'>12</p>
                </div>
            </div>
            <div id='pizza-inner-container'>
                <img src={pizza5} alt="" />
                <div id='pizza-details'>
                    <p id='pizza-name'>Pizza Salamino</p>
                    <p>Ingredients: Tomato, mozarella, and pepperoni</p>
                    <p id='pizza-quantity'>Sold Out</p>
                </div>
            </div>
            <div id='pizza-inner-container'>
                <img src={pizza6} alt="" />
                <div id='pizza-details'>
                    <p id='pizza-name'>Pizza Prosciutto</p>
                    <p>Ingredients: Tomato, mozarella, ham, aragula, and burrata cheese</p>
                    <p id='pizza-quantity'>18</p>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Pizza