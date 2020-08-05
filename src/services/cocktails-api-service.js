import config from '../config'
import TokenService from '../services/token-service'

const CocktailApiService = {
    getCocktails() {
        return fetch(`${config.API_BASE_URL}/cocktails`, {
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
    },
    addCocktail(cocktail){
        return fetch(`${config.API_BASE_URL}/cocktails`, {
            method: 'post',
            body: JSON.stringify(cocktail),
            headers: { 
                'Content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}` 
            } 
        })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    editCocktail(cocktail){
        return fetch(`${config.API_BASE_URL}/cocktails`, {
            method: 'PATCH',
            body: JSON.stringify(cocktail),
            headers: {
                "Accept":"application/json",
                'Content-type': 'application/json', 
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
    }
}

export default CocktailApiService;