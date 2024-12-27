import axios from "axios"


const baseURL = `https://dev-project-ecommerce.upgrad.dev/api`;
export const CreateAddress = async (address) => {
    return axios({
        url: `${baseURL}/addresses`,
        method: "POST",
        headers: {
            'x-auth-token':localStorage.getItem('xauth-token')
        },
        data: address,
    });
}



