

const token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaGl2YW1AbWFpbC5jb20iLCJpYXQiOjE3MzUyODAyMDUsImV4cCI6MTczNTI4ODYwNX0.FC3cM9w_PFv5PD-tN0l-WShAdz8tYXoA7jEjM3ZMlmpFBM8TcRnRSO3OtA_mn20e86IH5uMxp1B_85uZIH95xw';

export const setToken = () => {
    localStorage.setItem('xauth-token', token);
}

export const getToken = () => {
    if (localStorage.getItem('xauth-token')) {
        return localStorage.getItem('xauth-token');
    }
}