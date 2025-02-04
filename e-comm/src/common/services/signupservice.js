import axios from "axios"


const baseURL = `https://dev-project-ecommerce.upgrad.dev/api`;
export const signUpAPI = async (values) => {
    return axios({
        url: `${baseURL}/auth/signup`,
        method: "POST",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': 'true'
        },
        data: values,
    });
}



