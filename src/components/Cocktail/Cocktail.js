import React, { Component } from 'react';
import './Cocktail.css';
import Ingredients from '../Ingredients/Ingredients';
import CocktailListContext from '../../context/CocktailListContext';
import EditCocktailForm from '../../components/EditCocktailForm/EditCocktailForm';
import Flavor from '../Flavor/Flavor';
import config from '../../config';

export default class Cocktail extends Component{
    static contextType = CocktailListContext;
    constructor(props){
        super(props)
        this.state = {
            editing: false
        }
    }

    componentWillUnmount(){
        this.setState({ editing: false })
    }

    createCocktail(obj){
        const newCocktail = { ingredients: [] };
        for(const [key, value] of Object.entries(this.props)){
            if(value){
                if(key.includes("ingredient")){
                    newCocktail.ingredients.push(value);
                }else {
                    newCocktail[key] = value;
                }
            }
        }
        return newCocktail
    }

    cancelEditing = e => {
        this.setState({ editing: false })
    }

    myCocktail(obj){
        if(obj.user_id === parseInt(window.sessionStorage.getItem(config.USER_ID))){
            return <button onClick={()=> {this.setState({ editing: true })}} className="edit-cocktail">Edit Cocktail</button>
        }
        return <></>
    }

    render() {
        const { title, ingredients, flavor, recipe, image } = this.createCocktail(this.props)

        if(this.state.editing){
            return (
                <div>
                    <EditCocktailForm cancelEditing={() => this.cancelEditing} {...this.props}/>
                </div>
            )
        }

        return (
            <div className='cocktail'>
                <h4>{title}</h4>
                <Flavor flavor_key={flavor}/>
                {this.props.myCocktail ? this.myCocktail(this.props) : <></>}
                <div className='cocktail-description'>
                    <ul className='cocktail-ingredients'>
                        <Ingredients {...ingredients}/>
                    </ul>
                    <p className='cocktail-recipe'>{recipe}</p>
                </div>
                <img className='cocktail-image' alt={title} src={image}/>
            </div>
        )
    }
}