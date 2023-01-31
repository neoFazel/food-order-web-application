import React from 'react'
import styles from './MealItemFrom.module.css'

function Input(props) {
  return (
    <div>
        <input className={styles.input} {...props.input} />
        <label htmlFor={props.input.id} > تعداد</label>
    </div>
  )
}

export default Input