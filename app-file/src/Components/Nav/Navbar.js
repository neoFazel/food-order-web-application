import React from 'react'
import CartIcon from './CartIcon'
import styles from './Nav.module.css'
import Overlay from './Overlay'


function Navbar(props) {
  return (
    <div className={styles.navbar}>
        <button className={styles.cart__btn} onClick={props.openCart}>
            <CartIcon />
            <span>1</span>
            <p>سبد خرید</p>
        </button>
        <h1 className={styles.logo}>
          <a>
            <span>NINJA</span>burger
          </a>
        </h1>
    </div>
  )
}

export default Navbar