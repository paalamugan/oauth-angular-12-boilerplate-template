import { environment } from '@env/environment';

const apiEndPoint = environment.apiEndPoint;

export const apiRoutes = {
    AUTH: {
        SIGNUP: `${apiEndPoint}/signup`,
        LOGIN: `${apiEndPoint}/login`,
        LOGOUT: `${apiEndPoint}/logout`,
        SESSION_ME: `${apiEndPoint}/session/me`,
        AUTHENTICATE: `${apiEndPoint}/authenticate`
    },
    DASHBOARD: {
        GET_LATEST: `${apiEndPoint}/get-latest`
    },
}