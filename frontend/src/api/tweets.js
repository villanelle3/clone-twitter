import { authAxios } from "./useAxios";

export const getSoloTweet = async (id) => {
    const response = await authAxios.get(`/tweets/${id}/`);
    return response.data;
}

export const rt = async (id) => {
    await authAxios.post(`/tweets/rt/${id}/`);
}

export const like = async (id) => {
    await authAxios.post(`/tweets/like/${id}/`);
}

export const deleteTweet = async (id) => {
    await authAxios.delete(`/tweets/${id}/`);
}

export const editTweet = async (data) => {
    await authAxios.put(`/tweets/${data.get('id')}/`, data);
}

export const getUserTweets = async (username) => {
    const response = await authAxios.get(`/tweets/my/${username}/`);
    // console.log(response.data)
    return response.data;

}

export const getTweets = async ({ pageParam = 1 }) => {
    const response = await authAxios.get(`/tweets/?page=${pageParam}&pages=10`);
    return response.data;
}

export const addTweet = async (data) => {
    await authAxios.post("/tweets/", data);
}
