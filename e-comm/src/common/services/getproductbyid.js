import axios from "axios"


const baseURL = `https://dev-project-ecommerce.upgrad.dev/api`;
export const getProductById = async (productId) => {
    return await axios.get(`${baseURL}/products/${productId}`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': 'true'
        }
    })
}



