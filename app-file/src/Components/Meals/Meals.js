import React, { useEffect, useState } from 'react'
import MealItem from './MealItem/MealItem';
import styles from './Meals.module.css'

function Meals() {
    const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
            const respone = await fetch('https://react-getmovie-16874-default-rtdb.firebaseio.com/burgers.json');
            const responeData = await respone.json();
            const loadedMeals = [];
            for (const key in responeData){
                loadedMeals.push({
                    id: key,
                    title: responeData[key].title,
                    price: responeData[key].price,
                    desc: responeData[key].desc,
                })
            }
            setMeals(loadedMeals)
        }

        fetchMeals()
    }, [])

    const mealItem = meals.map(item => <MealItem key={item.id} id={item.id} title={item.title} price={item.price} desc={item.desc} />)

    return (
        <React.Fragment>
            <div>
                <h1 id='menu' className={styles.title}>منو برگر</h1>
                <div className={styles.underline}></div>
            </div>
            <section className={styles.meals}>
                <ul>
                    {mealItem}
                </ul>
            </section>
        </React.Fragment>
  )
}

export default Meals