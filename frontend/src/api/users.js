import {axi} from './useAxios';
import jwt_decode from "jwt-decode";

export const registerReq = async (data) => {
    await axi.post('/users/register/', data);
};

export const loginReq = async (data) => {
    const res = await axi.post('/users/login/', data);
    const { access, refresh } = res.data;

    localStorage.setItem('access', access);
    localStorage.setItem('refresh', refresh);

    // Verifica se o token de acesso não é vazio antes de decodificar
    if (access) {
        try {
            const user = jwt_decode(access);

            localStorage.setItem('username', user.username);
            localStorage.setItem('user_id', user.user_id);
            localStorage.setItem('avatar', user.avatar);
        } catch (error) {
            console.error("Erro ao decodificar o token:", error);
        }
    } else {
        console.error("Token de acesso vazio");
    }
};
