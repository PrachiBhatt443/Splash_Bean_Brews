import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>BREWS</div>
      <ul>
        <li href="#">HOME</li>
        <li href="#">MENU</li>
        <li href="#">ABOUT US</li>
        <li href="#">FACILITIES</li>
      </ul>
      <button className={styles.red}>Sign In</button>
    </div>
  );
}

export default Navbar;
