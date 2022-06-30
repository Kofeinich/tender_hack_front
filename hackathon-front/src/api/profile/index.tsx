import axios from 'axios';
import * as profileUrls from '../urls';
import {ProfileInfoValues} from "../../views/auth/types";
import * as authTypes from "../../views/auth/types";

export const getProfileInfoApi = (token: string | null) => {
    return axios.get(profileUrls.getProfileInfo, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => res.data)
        .catch((err) => console.log('getProfileInfoApi error:', err))
};

export const saveUserProfileInfoApi = (token: string | null, userData: ProfileInfoValues) => {
    return axios.post(profileUrls.sendProfileInfo, userData, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'content-type': 'application/json'
        },
    })
        .then((res) => res)
        .catch((err) => console.log('saveUserProfileInfo error:', err))
}