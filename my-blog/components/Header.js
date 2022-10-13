import React from 'react';
import styels from '../styles/components/Header.module.scss';

const Header = () => {
  return (
    <div className={styels.navbar}>
      <span><h1>Next-B</h1></span>
    </div>
  )
}

export default Header