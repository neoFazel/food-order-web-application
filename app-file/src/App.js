import React, { useState } from 'react'
import Cart from './Components/Cart/Cart'
import Nav from './Components/Nav/Nav'
import Meals from './Components/Meals/Meals'

export default function App() {
    const [cartIsShown, setCartIsShown] = useState(false)

    const openCart = () => {
        setCartIsShown(true)
    }
    const closeCart = () => {
        setCartIsShown(false)
    }
    
    return (
            <React.Fragment>
                {cartIsShown ? <Cart onCloseCart={closeCart}/> : ''}
                <Nav onOpenCart={openCart}/>
                <main>
                    <Meals />
                </main>
            </React.Fragment>
        )
}

