import React, { Component } from 'react'
import './AddIngredient.css'
import CocktailListContext from '../../context/CocktailListContext'
import Select from 'react-select'
import './AddIngredient.css'

export default class AddIngredient extends Component {
    static contextType = CocktailListContext

    render() {
        const { ingredientsList } = this.context
        const { ingredients } = this.props

        const listOfIngredients = []
        const ingredientsToShow = []

        if(this.context.ingredientsList.length > 0) {
            ingredientsList.forEach(item => listOfIngredients.push({ value: item.id, label: item.title }))
        }

        if(ingredients){
            ingredients.forEach(item => ingredientsToShow.push({ value: item-1, label: ingredientsList[item-1].title}))
        }
        
        return(
            <div className="select-ingredient">
                <p>Select Ingredients:</p>
                <Select 
                    defaultValue={ingredientsToShow}
                    onChange={this.props.handleIngredients} 
                    isMulti options={listOfIngredients} />
            </div>
        )
    }
} 