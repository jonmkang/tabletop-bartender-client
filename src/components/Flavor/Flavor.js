import React, { Component } from 'react';
import CocktailListContext from '../../context/CocktailListContext'

export default class Flavor extends Component {
    static contextType = CocktailListContext

    render() {
        const flavor_list = this.context.flavorsList
        let flavor = ''
        if(flavor_list.length > 0){
            flavor = flavor_list[this.props.flavor_key-1].title
        }
        
        return (
            <div>
                <p className="cocktail-flavor">Flavor note: {flavor}</p>
            </div>
        )
    }
}