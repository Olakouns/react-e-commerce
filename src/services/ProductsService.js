import axios from "axios"

export const GetProducts  = async () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/products`)
}

export const GetProductById = async (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/products/${id}`)
}