import React from 'react';
import MealItemForm from '../MealItemForm/MealItemForm';
import styles from './MealItem.module.css';

function MealItem(props) {
  return (
    <li className={styles.single__item}>
        <div className={styles.form__container}>
            <MealItemForm />
        </div>
        <div className={styles.desc__container}>
            <h2>{props.title}</h2>
            <div>{props.desc}</div>
            <div className={styles.price}>{props.price}T</div>
        </div>
    </li>
  )
}

export default MealItem