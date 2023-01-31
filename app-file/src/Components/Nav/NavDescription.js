import React from 'react'
import styles from './Nav.module.css'

function NavDescription() {
  return (
    <div className={styles.nav__description}>
        <p>یه غول خوشمزه تو 15 استان مختلف فقط<br/>  <span>نینجا برگر</span></p>
        <div>
            <button>
            <a href='#menu'>مشاهده منو</a> 
            </button>
        </div>
    </div>
  )
}

export default NavDescription