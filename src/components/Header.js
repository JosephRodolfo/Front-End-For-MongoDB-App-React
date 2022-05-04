import React from 'react';
import { Navigation } from './Navigation';


const Header = () => (
  <header className='header'>
  <div className='content-container'>
    <div className='header-flex-wrapper'>
   <h1>Task Manager</h1>
   <Navigation />
   </div>
   </div>
  </header>
);

export default Header;