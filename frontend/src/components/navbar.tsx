import React from 'react';
import './styles/navbarStyle.css';
import {Link} from 'react-router-dom';
import {  ShoppingCart } from 'lucide-react'; 
import euro from "../assets/euro.png";
import dollar from "../assets/dollar.png";

function NavbarComponent(): React.JSX.Element {

  const [currencyValue, setCurrencyValue] = React.useState<string>(localStorage.getItem('currency') || 'PLN');
  const setCurrency = (currency: string) => {
    localStorage.setItem('currency', currency);
    setCurrencyValue(currency);
    const event = new CustomEvent('currencyChange');
    window.dispatchEvent(event);
    setCurrencyValue(currency);
    console.log(currency);
  }
  
  return (
      <div className='navbar'>
        <div className="navLinks">
          <Link to='/' className='brandName'> Biuro Turystyczne</Link>
          <Link to='/trips' className='brandName'>Wycieczki</Link>
          <Link to='/addTrip' className='brandName'>Dodaj wycieczkę</Link>
          <div className="currencyDiv">
            <div className={currencyValue === '€' ? 'currencySelected' : "currency" } onClick={() => {setCurrency('€')}}>
              <img src={euro} alt="€ symbol"/>
            </div>
            <div className={currencyValue === '$' ? 'currencySelected' : "currency" } onClick={() => {setCurrency('$')}}>
            <img src={dollar} alt="Dolar symbol"/>
            </div>
            <div className={currencyValue === 'PLN' ? 'currencySelected' : "currency" } onClick={() => {setCurrency('PLN')}}>
              <p className="pln">PLN</p>
            </div>
          </div>
        </div>

        <div className="shoppingLinks">
          <Link to='/shoppingHistory' className='brandName'>Historia zakupów</Link>
          <Link to='/shoppingCart' className='brandName'><ShoppingCart size={32}/> </Link>
        </div>
      </div>
  );
}

export default NavbarComponent;