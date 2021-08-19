import { environment } from '@env/environment';

const API_END_POINT = environment.API_END_POINT;

export const apiRoutes = {
    AUTH: {
        SIGNUP: `${API_END_POINT}/signup`,
        LOGIN: `${API_END_POINT}/login`,
        LOGOUT: `${API_END_POINT}/logout`,
        SESSION_ME: `${API_END_POINT}/session/me`,
        AUTHENTICATE: `${API_END_POINT}/authenticate`
    },
    DASHBOARD: {
        GET_LATEST: `${API_END_POINT}/get-latest`
    },
}