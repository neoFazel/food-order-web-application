import React from 'react'
import Input from './Input'
import styles from './MealItemFrom.module.css'

function MealItemForm() {
  return (
    <form>
        <Input 
          label="amount"
          input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
          }}
          />
        <button className={styles.item__btn}>خرید</button>
    </form>
  )
}

export default MealItemForm