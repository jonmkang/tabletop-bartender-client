import React, { Component } from 'react';
import CocktailListContext from '../../context/CocktailListContext'
import Cocktail from '../Cocktail/Cocktail'

export default class CocktailList extends Component{
    static contextType = CocktailListContext

    render(){
        const { cocktailList } = this.context
        const searchResults = cocktailList.map((item, id) => <Cocktail {...item} key={id}/>)
        return(
            <div className='cocktailList'>
                {searchResults}
            </div>
        )
    }
}