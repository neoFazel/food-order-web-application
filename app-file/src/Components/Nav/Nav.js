import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import NavDescription from './NavDescription';
import styles from './Nav.module.css'

function Nav() {
  return (
    <navbar className={styles.nav}>
      <div className={styles.nav__container}>
        <Hero />
        <Navbar />
        <NavDescription />
        <div className={styles.overlay}></div>
      </div>
    </navbar>
    )
}

export default Nav;