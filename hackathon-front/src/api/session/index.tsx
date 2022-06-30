import axios from 'axios';
import * as sessionUrls from '../urls';
import {getAutoSessions} from "../urls";
import * as activeSessionsUrls from "../urls";

export const getActiveSessionApi = (token: string | null) => {
    return axios.get(sessionUrls.getActiveSessions, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => res.data.sessions)
        .catch((err) => console.log('getAllBooksApi error:', err))
};

export const getActiveSessionIdApi = (token: string | null, id: number) => {
    return axios.get(sessionUrls.getActiveSessionId + id, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => res.data)
        .catch((err) => console.log('getActiveSessionIdApi error:', err))
};

export const startBotData = (token: string | null, sessionId: number, botData: any) => {
    return axios.post(activeSessionsUrls.sendActiveSessions + `/${sessionId}/settings/save`, botData, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'content-type': 'application/json'
        },
    })
        .then((res) => res)
        .catch((err) => err)
}