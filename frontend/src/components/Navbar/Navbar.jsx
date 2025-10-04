import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const { getTotalCartAmount } = useContext(StoreContext);

  const menuItems = [
    { id: 'home', label: 'home', to: '/', type: 'link' },
    { id: 'menu', label: 'menu', href: '#explore-menu', type: 'anchor' },
    { id: 'mobile-app', label: 'mobile-app', href: '#app-download', type: 'anchor' },
    { id: 'contact-us', label: 'contact us', href: '#footer', type: 'anchor' },
  ];


  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="App Logo" className='logo' /></Link>

      <ul className="navbar-menu">
        {menuItems.map((item) =>
          item.type === 'link' ? (
            <Link
              key={item.id}
              to={item.to}
              onClick={() => setMenu(item.id)}
              className={menu === item.id ? 'active' : ''}
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMenu(item.id)}
              className={menu === item.id ? 'active' : ''}
            >
              {item.label}
            </a>
          )
        )}
      </ul>

      <div className='navbar-right'>
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to={'/cart'}>
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;

