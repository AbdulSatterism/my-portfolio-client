import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const axiosSecure = axios.create({
    baseURL: `https://my-portfolio-server-ffbv.onrender.com`
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext)

    // request interceptor for headers info
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // response interceptor for error code
    axiosSecure.interceptors.response.use(function (response) {

        // Do something with response data
        return response;
    }, async (error) => {
        // when got error then logout user
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logOut()
            navigate('/login')
        }
        // console.log('errror status code form interceptor', status)
        return Promise.reject(error);
    });


    return axiosSecure;
};

export default useAxiosSecure;