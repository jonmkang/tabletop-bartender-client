import React, { Component } from 'react';
import './Cocktail.css'

export default class Cocktail extends Component{


    render() {
        const { name, ingredients, flavorProfile, recipe, image } = this.props
        return (
            <div className='cocktail'>
                <h4>{name}</h4>
                <p className="cocktail-flavor">Flavor notes: {flavorProfile}</p>
                <div className='cocktail-description'>
                    <ul className='cocktail-ingredients'>
                        {ingredients.map((ingredient, id) => <li key={id}>{ingredient}</li>)}
                    </ul>
                    <p className='cocktail-recipe'>{recipe}</p>
                </div>
                <img className='cocktail-image' alt={name} src={image}/>
            </div>
        )
    }
}