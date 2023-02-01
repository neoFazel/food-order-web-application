import React from 'react'
import styles from './Cart.module.css'
import Modal from '../UI/Modal'

function Cart(props) {
    const cartItems = (
        <ul>
            {[{id: 1, title: 'همبرگر' , price: 123, desc:'شسنمیتبم /شسیمنبتش/مشسنکیتب/یسنمشتب'}].map(item => {
                return (
                    <li key={item.id}>{item.title}</li>
                )
            })}
        </ul>
    )
  return (
    <Modal>
        {cartItems}
        <div className={styles.cart__info}>
            <div className={styles.total__expens}>
                <span>234T</span>
                <span>جمع کل</span>
            </div>
            <div className={styles.btns}>
                <button onClick={props.onCloseCart} className={styles.close__btn}>بستن</button>
                <button className={styles.checkout__btn}>تکمیل خرید</button>
            </div>
        </div>
    </Modal>
  )
}

export default Cart