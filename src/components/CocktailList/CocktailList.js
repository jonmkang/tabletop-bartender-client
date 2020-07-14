import React, { Component } from 'react';
import information from '../../information'
import CocktailListContext from '../../context/CocktailListContext'
import Cocktail from '../Cocktail/Cocktail'

export default class CocktailList extends Component{
    static contextType = CocktailListContext

    componentDidMount(){
        this.context.setCocktailList()
    }

    render(){
        const cocktailList = information.cocktails.map((item, id) => <Cocktail {...item} key={id}/>)
        return(
            <div className='cocktailList'>
                {cocktailList}
            </div>
        )
    }
}