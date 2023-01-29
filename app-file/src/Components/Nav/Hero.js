import React from 'react'
import styles from './Nav.module.css'
import heroImg from '../../assets/hero-burger.jpg'


function Hero() {
  return (
    <div className={styles.hero}>
        <img src={heroImg}/>
    </div>
  )
}

export default Hero