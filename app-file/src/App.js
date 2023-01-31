import React from 'react'
import Nav from './Components/Nav/Nav'
import Meals from './Components/Meals/Meals'

export default function App() {

    return (
            <React.Fragment>
                <Nav />
                <main>
                    <Meals />
                </main>
            </React.Fragment>
        )
}

