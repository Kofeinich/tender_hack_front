import axios from 'axios';
import * as authUrls from '../urls';
import * as authTypes from '../../views/auth/types';

export const saveUserApi = (userData: authTypes.RegistrationFormValues) => {
  return axios.post(authUrls.registerUserUrl, { ...userData }, {
    headers: {
      'content-type': 'application/json'
    },
  })
    .then((res) => res)
    .catch((err) => console.log('saveUserApi error:', err))
}

export const loginUserApi = (userData: authTypes.LoginFormInitialValues) => {
  return axios.post(authUrls.loginUserUrl, userData, {
    headers: {
      'content-type': 'application/json'
    },
  })
    .then((res) => res)
    .catch((err) => console.log('loginUserApi error:', err))
}