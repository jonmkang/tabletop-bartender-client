import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import "./AddCocktail.css"
import AddCocktailForm from '../../components/AddCocktailForm/AddCocktailForm'

export default class AddCocktail extends Component{
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        }
    }

    createCocktailSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
    }

    render(){
        return(
            <div className='loginPage'>
                <Header loginPage={true}/>
                <AddCocktailForm createCocktailSuccess={this.createCocktailSuccess}/>
            </div>
        )
    }
}