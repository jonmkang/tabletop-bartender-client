import React, { Component } from 'react'
import './AddIngredient.css'
import CocktailListContext from '../../context/CocktailListContext'
import Select from 'react-select'
import './AddIngredient.css'

export default class AddIngredient extends Component {
    static contextType = CocktailListContext

    render() {
        const { ingredientsList } = this.context

        const listOfIngredients = []

        if(this.context.ingredientsList.length > 0) {
            ingredientsList.forEach(item => listOfIngredients.push({ value: item.id, label: item.title }))
        }

        return(
            <div className="select-ingredient">
                <p>Select Ingredients:</p>
                <Select onChange={this.props.handleIngredients} isMulti options={listOfIngredients} />
            </div>
        )
    }
} 