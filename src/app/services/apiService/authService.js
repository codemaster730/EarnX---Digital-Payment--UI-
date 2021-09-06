import API from './api';

const BASE_URL = 'https://tradanteauthservice.azurewebsites.net';

const login = (params) => {

    const data = {
        'AuthToken': 'sadf6a8s76df8as76df8as7d6f8asdf',
        'loginSuccess': true 
    }

    const error = {
        'AuthToken': '',
        'loginSuccess': false 
    }

    if(params.mobileNumber === '1234' && params.password === '123!@#') {
        return data;
    }else{
        return error;
    }
    // return API.post(BASE_URL + '/auth/login', params).then(res => res.data);
};

const getUser = () => {
    return API.get(BASE_URL + '/user').then(res => res.data);
}

const validateToken = (tokenParams) => {
    return API.get(BASE_URL + '/auth/validate', tokenParams).then(res => res.data);
}
export {
    login,
    getUser,
    validateToken
};
