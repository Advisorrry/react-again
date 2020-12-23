import * as axios from 'axios'

const API_KEY = '85b12e69-88ec-4f5a-bc63-9b6225700c28'
const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL: baseUrl,
    headers: {
        'API-KEY': API_KEY
    }
})

export const getUsers = (currentPage, pageSize) => {
    return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
        return response.data
    })
}

export const getFollow = (id) => {
    return  instance.post(`follow/${id}`)
    .then(response => {
        return response.data
    })
}
export const getUnFollow = (id) => {
    return  instance.delete(`follow/${id}`)
    .then(response => {
        return response.data
    })
}
export const getAuth = () => {
    return  instance.get(`auth/me`)
    .then(response => {
        return response.data
    })
}
export const getProfile = (userId) => {
    return  instance.get(`profile/${userId}`)
    .then(response => {
        return response.data
    })
}

