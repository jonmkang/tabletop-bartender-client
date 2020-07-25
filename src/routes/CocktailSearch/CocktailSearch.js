import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import CocktailList from '../../components/CocktailList/CocktailList'
import "./CocktailSearch.css"

export default class CocktailSearch extends Component{
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
    }

    handleSearchSuccess = () => {
        const { history } = this.props
        history.push('/cocktailSearch')
    }


    render(){
        return(
            <div className='loginPage'>
                <Header />
                <SearchBar handleSearchSuccess={this.handleSearchSuccess}/>
                <CocktailList/>
            </div>
        )
    }
}