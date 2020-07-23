import React, { Component } from 'react';
import CocktailListContext from '../../context/CocktailListContext';

export default class Ingredients extends Component {
    static contextType = CocktailListContext

    render() {  
        const arrayOfIngredients = Object.values(this.props)
        const listOfIngredients = arrayOfIngredients.map(item => this.context.ingredientsList[item-1])
        if(listOfIngredients[0] !== undefined){
            return(
                <div>
                    {listOfIngredients.map(item => <li key={item.id}>{item.title}</li>)}
                </div>
            )
        }else{
            return (
                <div>
                    Ingredient List is loading
                </div>
            )
        }
    }
}