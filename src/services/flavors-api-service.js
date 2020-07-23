import config from '../config'

const FlavorsApiService = {
    getFlavors() {
        return fetch(`${config.API_BASE_URL}/flavors`, {
            headers: {
            },
        })
            .then(res=> 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                    )
    }
}

export default FlavorsApiService;