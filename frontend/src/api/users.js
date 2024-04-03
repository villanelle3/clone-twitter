import axi from './useAxios';

export const loginReq = async (data) => {
    await axi.post('/users/login/', data)
}