import axios from "axios"


const baseURL = `https://dev-project-ecommerce.upgrad.dev/api`;
export const getAllProducts = async () => {
    return await axios.get(`${baseURL}/products`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': 'true'
        }
    })
}



