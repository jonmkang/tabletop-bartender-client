import config from '../config'

const IngredientsApiService = {
    getIngredients() {
        return fetch(`${config.API_BASE_URL}/ingredients`, {
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

export default IngredientsApiService;