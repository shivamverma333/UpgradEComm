import axios from "axios"


const baseURL = `https://dev-project-ecommerce.upgrad.dev/api`;
export const getAddressList = async () => {
    return await axios.get(`${baseURL}/addresses`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': 'true',
            'x-auth-token':localStorage.getItem('xauth-token')
        }
    })
}



