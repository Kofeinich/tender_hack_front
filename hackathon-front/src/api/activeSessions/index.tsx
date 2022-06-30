import axios from 'axios';
import * as activeSessionsUrls from '../urls';

export const getAutoSessionsApi = (token: string | null) => {
    console.log('q');
    return axios.get(activeSessionsUrls.getAutoSessions, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => res.data.sessions)
        .catch((err) => console.log('getActiveSessionsApi error:', err))
};

export const saveActiveBotApi = (token: string | null, sessionId: number, botData: any) => {
    return axios.post(activeSessionsUrls.sendActiveSessions + `/${sessionId}/settings/save`, botData, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'content-type': 'application/json'
        },
    })
        .then((res) => res)
        .catch((err) => console.log('saveUserProfileInfo error:', err))
}