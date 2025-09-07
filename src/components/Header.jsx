import React from "react";

export default function Header() {
  return (
    <header>
      <div className='logo-and-text'>
        <img src='/images/Logo.png' alt='logo' />
        <div className=''>
          <h1>Jasim Uddin Institute</h1>
          <h4>48 Joar Sahara, Vatara, Dhaka - 1229, Bangladesh</h4>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About Us</a>
          </li>
          <li>
            <a href='/courses'>Education Info</a>
          </li>
          <li>
            <a href='/gallery'>Gallery</a>
          </li>
          <li>
            <a href='/contact'>Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
