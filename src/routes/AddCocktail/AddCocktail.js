import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import "./AddCocktail.css"
import AddCocktailForm from '../../components/AddCocktailForm/AddCocktailForm'

export default class AddCocktail extends Component{
    render(){
        return(
            <div className='loginPage'>
                <Header loginPage={true}/>
                <AddCocktailForm />
            </div>
        )
    }
}