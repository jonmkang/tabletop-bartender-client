import React, { Component } from 'react';
import './Cocktail.css'
import Ingredients from '../Ingredients/Ingredients'
import CocktailListContext from '../../context/CocktailListContext';
import Flavor from '../Flavor/Flavor'

export default class Cocktail extends Component{
    static contextType = CocktailListContext

    createCocktail(obj){
        const newCocktail = { ingredients: [] };
        for(const [key, value] of Object.entries(this.props)){
            if(value){
                if(key.includes("ingredient")){
                    newCocktail.ingredients.push(value)
                }else {
                    newCocktail[key] = value
                }
            }
        }
        console.log(newCocktail)
        return newCocktail
    }

    render() {
        const { title, ingredients, flavor, recipe, image } = this.createCocktail(this.props)
        
        return (
            <div className='cocktail'>
                <h4>{title}</h4>
                <Flavor flavor_key={flavor}/>
                <div className='cocktail-description'>
                    <ul className='cocktail-ingredients'>
                        <Ingredients {...ingredients}/>
                    </ul>
                    <p className='cocktail-recipe'>{recipe}</p>
                </div>
                <img className='cocktail-image' alt={title} src={image}/>
            </div>
        )
    }
}