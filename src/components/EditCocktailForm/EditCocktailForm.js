import React, { Component } from 'react';
import CocktailListContext from '../../context/CocktailListContext'
import CocktailApiService from '../../services/cocktails-api-service'
import AddIngredient from '../AddIngredient/AddIngredient'
import xss from 'xss'
import './EditCocktailForm.css'
import config from '../../config';


export default class EditCocktailForm extends Component{
    static contextType = CocktailListContext

    constructor(props){
        super(props)
        this.state = {
            ingredients: [],
            error: ""
        }
    }

    loadIngredients = obj => {
        const ingredients = [];
        for(const [key, value] of Object.entries(obj)){
            if(value){
                if(key.includes("ingredient")){
                    ingredients.push(value);
                }
            }
        }
        return ingredients;
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
            id: null,
            title: xss(title.value),
            recipe: xss(recipe.value),
            image: '',
            flavor: null,
            user_id: parseInt(window.sessionStorage.getItem(config.USER_ID)),
            ingredients: this.loadIngredients(this.props)
        }

        if(flavor_profile.value !== "None"){
            cocktailToPost.flavor = parseInt(flavor_profile.value);
        }

        if(image.value.length > 0){
            if(this.checkURL(image.value)){
                cocktailToPost.image = xss(image.value);
            } else {
                this.setState({ error: "You have entered an invalid image URL!"})
            }
        }

        if(image.value.length === 0){
            cocktailToPost.image = xss('https://images.food52.com/hRaCMJLhOB2SLHVOyA-_i6Wvq1Y=/362x0/fd2dd628-1ec6-4bcc-ab69-946c8e82068a--2019-1001_bormioli-rocco_novecento-cocktail-glasses_full-bar_1x1_rocky-luten_037.jpg')
        }

        if(this.state.ingredients.length > 0){
            cocktailToPost.ingredients = this.state.ingredients.map(item => item.value)
        }
        
        const idToChange = cocktailList.findIndex(i => i.id === this.props.id)

        cocktailToPost.id = this.props.id;

        CocktailApiService.editCocktail(cocktailToPost)
            .then(res => {
                if(!res.ok) 
                    return
                for(let i = 1; i <= cocktailToPost.ingredients.length; i++){
                    cocktailToPost[`ingredient${i}`] = cocktailToPost.ingredients[i-1];
                }
                delete cocktailToPost.ingredients;

                const changedList = cocktailList;
                changedList[idToChange] = cocktailToPost;
                this.context.setCocktailList(changedList);
            })
            .then(this.props.cancelEditing())
           
    }
    
    render(){
        const flavorProfileList = this.context.flavorsList.map(item => <option key={item.id} value={item.id}>{item.title}</option>)
        const { error } = this.state;
        const ingredients = this.loadIngredients(this.props)
        
        return(
            <div className='add-cocktail-form'>
                <form  
                    onSubmit={this.handleSubmit}>
                    <div className='add-cocktail-title'>
                        <label htmlFor='title'>
                            Cocktail Name:
                        </label>
                        <input
                            defaultValue={this.props.title}
                            required
                            name='title'
                            id='title'/>
                    </div>
                    <AddIngredient ingredients={ingredients} handleIngredients={this.handleIngredients} />
                    <div className='add-cocktail-recipe'>
                        <label htmlFor='recipe'>
                            Recipe: 
                        </label>
                        <textarea 
                            defaultValue={this.props.recipe}
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
                            defaultValue={this.props.image}
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
                            defaultValue={this.props.flavor}
                            >
                            {flavorProfileList}
                            <option value={null}>None</option>
                        </select>
                    </div>
                    <br/>
                    <button className='submit-button' type='button' onClick={this.props.cancelEditing()}>Cancel</button>
                    <button className="submit-button" type='submit'>Submit cocktail!</button>
                </form>
                {error}
            </div>
        )
    }
}