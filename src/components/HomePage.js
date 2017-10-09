import React, { Component } from 'react'

import Header from './Header'
import Shop from './Shop'

// Extends says we're inheriting everything that is coming from the react class specifically coming from the react library into thi regular JS object we're creating
class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
                <hr />
                <Shop />
            </div>
        )
    }
}

export default Homepage