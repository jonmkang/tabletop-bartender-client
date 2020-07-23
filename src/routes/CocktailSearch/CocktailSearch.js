import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import CocktailList from '../../components/CocktailList/CocktailList'
import "./CocktailSearch.css"

export default class CocktailSearch extends Component{
    render(){
        return(
            <div className='loginPage'>
                <Header />
                <SearchBar/>
                <CocktailList/>
            </div>
        )
    }
}