import React, { Component } from 'react';
import CocktailListContext from '../../context/CocktailListContext'
import Cocktail from '../Cocktail/Cocktail'

export default class CocktailList extends Component{
    static contextType = CocktailListContext

    render(){
        const { cocktailList, searchResults } = this.context
        const fullCocktailList = cocktailList.map((item, id) => <Cocktail {...item} key={id}/>)
        const searchResultsList = searchResults.map((item, id) => <Cocktail {...item} key={id}/>)
        if(searchResults.length > 0){
            return (
                <div className='cocktailList'>
                    {searchResultsList}
                </div>
            )
        }
        console.log(searchResults)
        return(
            <div className='cocktailList'>
                {fullCocktailList}
            </div>
        )
    }
}