import config from '../config'

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
    }
}

export default CocktailApiService;