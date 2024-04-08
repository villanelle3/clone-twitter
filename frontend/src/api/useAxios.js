import axios from "axios";
import jwt_decode from "jwt-decode";

const baseURL = "http://127.0.0.1:8000/";

export const axi = axios.create({
    baseURL,
});

export const authAxios = axios.create({
    baseURL,
    withCredentials: true,
});

authAxios.interceptors.request.use(async (config) => {
    const access = localStorage.getItem('access');
    config.headers = {
        'Authorization': `Bearer ${access}`,
    };

    const decoded = jwt_decode(access);
    const exp = new Date(decoded.exp * 1000);
    const now = new Date();
    const fiveMinutes = 300000;  // 5 minutes in milliseconds

    if (exp.getTime() - now.getTime() < fiveMinutes) {
        try {
            const oldRefresh = localStorage.getItem('refresh');
            const res = await axi.post('/users/refresh/', { oldRefresh });
            const { access: newAccess, refresh: newRefresh } = res.data;

            localStorage.setItem('access', newAccess);
            localStorage.setItem('refresh', newRefresh);
        } catch (err) {
            localStorage.clear();
            window.location.href = '/login';
        }
    } else {
        return config;
    }

    return config;
});
