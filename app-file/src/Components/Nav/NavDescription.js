import React from 'react'
import styles from './Nav.module.css'

function NavDescription() {
  return (
    <div className={styles.nav__description}>
        <p>یه غول خوشمزه تو 15 استان مختلف فقط<br/>  <span>نینجا برگر</span></p>
        <a>شعبه ها</a>
        <div>
            <button>
            <a>مشاهده منو</a> 
            </button>
        </div>
    </div>
  )
}

export default NavDescription