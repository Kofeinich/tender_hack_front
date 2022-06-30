const domainUrl = 'https://tander-hack.herokuapp.com/api/v1';
//auth
export const loginUserUrl = `${domainUrl}/auth/login`;
export const logoutUserUrl = `${domainUrl}/auth/logout`;
export const registerUserUrl = `${domainUrl}/auth/registration`;
export const updateTokenUserUrl = `${domainUrl}/auth/update/token`;
export const updatePasswordUserUrl = `${domainUrl}/auth/update/password`;
//sessionsDescriptions
export const getAutoSessions = `${domainUrl}/customer/auto/sessions`;
//activeSessions
export const getActiveSessions = `${domainUrl}/customer/session/active`
export const getActiveSessionId = `${domainUrl}/customer/session/`
export const sendActiveSessions = `${domainUrl}/bot/session`
//profile
export const getProfileInfo = `${domainUrl}/customer/profile`;
export const sendProfileInfo = `${domainUrl}/customer/profile/save`;

