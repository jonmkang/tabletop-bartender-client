import React, { Component } from 'react';
import CocktailListContext from '../../context/CocktailListContext';
import config from '../../config'
import Cocktail from '../../components/Cocktail/Cocktail'
import './MyCocktail.css'

export default class MyCocktails extends Component {
    static contextType = CocktailListContext
    
    setMyCocktails() {
        const { cocktailList } = this.context;
        const user_id = parseInt(window.sessionStorage.getItem(config.USER_ID))
        const myCocktails = cocktailList.filter(cocktail => cocktail.user_id === user_id)

        return myCocktails
    }

    render() {
        const myCocktails = this.setMyCocktails()
        if(myCocktails.length !== 0){
            const cocktailsToShow = myCocktails.map((cocktail, id) => <Cocktail myCocktail={true} {...cocktail} key={id}/>)
            return (
                <div className='my-cocktails'>
                {cocktailsToShow}
                </div>
            )
        }
        return (
            <div className='no-cocktails'>
                You don't have any cocktails made at the moment, why don't you create one?
            </div>
        )
        
    }
}