import Axios from 'axios';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
class Api {
    constructor(baseURL) {
        this._token = null;

        this._axios = Axios.create({
            baseURL,
            headers,
            responseType: "json"
        });
    }

    setToken(token) {
        this._token = token;
        localStorage.setItem('token', token);
    }

    getToken(token) {
        return localStorage.getItem('token');
    }

    clearToken(token) {
        return localStorage.removeItem('token');
    }

    get(url) {
        return this._axios.get(url, {
            headers: {
                'X-Tradante-AuthToken': this._token,
            }
        })
    }

    post(url, data) {
        return this._axios.post(url, data, {
            headers: {
                'X-Tradante-AuthToken': this._token
            }
        })
    }
}

const instance = new Api();

export default instance;
