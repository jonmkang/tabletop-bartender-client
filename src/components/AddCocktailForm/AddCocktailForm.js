import React, { Component } from 'react';
import CocktailListContext from '../../context/CocktailListContext'
import CocktailApiService from '../../services/cocktails-api-service'
import AddIngredient from '../AddIngredient/AddIngredient'
import xss from 'xss'
import './AddCocktailForm.css'



export default class AddCocktailForm extends Component{
    static contextType = CocktailListContext

    constructor(props){
        super(props)
        this.state = {
            ingredients: null,
            error: ""
        }
    }

    handleIngredients = (ingredients) => {
        this.setState({ ingredients });
    }

    checkURL(url) {
        return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

    handleSubmit = e => {
        e.preventDefault();
        const { title, recipe, image, flavor_profile } = e.target;
        const { cocktailList } = this.context;

        if(this.state.ingredients.length > 6){
            this.setState({ error: "You can only have at most 6 ingredients"});
            return this.state.error
        } 
        
        const cocktailToPost = {
            title: xss(title.value),
            recipe: xss(recipe.value),
            image: '',
            flavor: null,
        }

        if(flavor_profile.value !== "None"){
            cocktailToPost.flavor = flavor_profile.value;
        }

        if(image.value.length > 0){
            if(this.checkURL(image.value)){
                cocktailToPost.image = xss(image.value);
            } else {
                this.setState({ error: "You have entered an invalid image URL!"})
            }
        }

        if(!!this.state.ingredients){
            cocktailToPost.ingredients = this.state.ingredients.map(item => item.value)
        }
        
        CocktailApiService.addCocktail(cocktailToPost)
            .then(res => {
                    cocktailList.push(res)
                    this.props.createCocktailSuccess()
                })
    }

    render(){
        const flavorProfileList = this.context.flavorsList.map(item => <option key={item.id} value={item.id}>{item.title}</option>)
        const { error } = this.state
        return(
            <div className='add-cocktail-form'>
                <form  
                    onSubmit={this.handleSubmit}>

                    <div className='add-cocktail-title'>
                        <label htmlFor='title'>
                            Cocktail Name:
                        </label>
                        <input
                            required
                            name='title'
                            id='title'/>
                    </div>
                    <AddIngredient handleIngredients={this.handleIngredients} />
                    <div className='add-cocktail-recipe'>
                        <label htmlFor='recipe'>
                            Recipe: 
                        </label>
                        <textarea 
                            name='recipe' 
                            id='recipe'
                            placeholder="This is a sample recipe"
                            cols="30"
                            rows="5"
                            required>

                        </textarea>
                    </div>
                    <div className='add-cocktail-image'>
                        <label htmlFor='image'>
                            Image URL: 
                        </label>
                        <input 
                            name='image'
                            id='image'
                            />
                    </div>
                    <div className="add-cocktail-flavor">
                        <label htmlFor="flavor_profile">
                            Flavor Profile: 
                        </label>
                        <select 
                            required
                            aria-label='Flavor Profile'
                            name='flavor_profile'
                            id='flavor_profile'
                            defaultValue={1}
                            >
                            {flavorProfileList}
                            <option value={null}>None</option>
                        </select>
                    </div>
                    <br/>
                    <button className="submit-button" type='submit'>Submit cocktail!</button>
                </form>
                {error}
            </div>
        )
    }
}