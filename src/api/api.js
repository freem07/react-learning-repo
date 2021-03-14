import axios from 'axios'

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "647b46fd-0a96-41d5-8178-699e0cd53ae2"
    },

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`) 
            .then(response => response.data)
    },
    userFollow(id){
        return instance.post(`follow/${id}`)
        .then(response => response.data)
    },
    userUnFollow(id){
        return instance.delete(`follow/${id}`)
        .then(response => response.data)
    }

}