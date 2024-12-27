import axios from "axios"


const baseURL = `https://dev-project-ecommerce.upgrad.dev/api`;
export const signInAPI = async (values) => {
    return axios({
        url: `${baseURL}/auth/signin`,
        method: "POST",
        
        data: values,
    });
}



