import React, { Component } from 'react'
import './MyCocktailPage.css'

import Header from '../../components/Header/Header'
import MyCocktails from '../../components/MyCocktails/MyCocktails'

export default class MyCocktailPage extends Component{
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
    }

    render(){
        return(
            <div>
                <Header />
                <MyCocktails/>
            </div>
            
        )
    }
}