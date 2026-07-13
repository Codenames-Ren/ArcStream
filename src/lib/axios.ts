import { API } from '@/constants/api';
import { CONFIG } from '@/constants/config';
import axios from 'axios';

export const http = axios.create({
    baseURL: API.BASE_URL,
    timeout: CONFIG.REQUEST_TIMEOUT,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

// Request Interceptor
http.interceptors.request.use(
    (config) => {

        // console.log('\n========== API REQUEST ==========');
        // console.log(
        //     `${config.method?.toUpperCase()} ${config.baseURL}${config.url}`,
        // );

        if (config.params) {
            console.log('Params :', config.params);
        }

        if (config.data) {
            console.log('Body   :', config.data);
        }

        console.log('=================================\n');

        return config;
    },
    (error) => {
        console.error('[Request Error]', error);
        return Promise.reject(error);
    },
);

// Response Interceptor
http.interceptors.response.use(
    (response) => {

        // console.log('\n========== API SUCCESS ==========');
        // console.log(
        //     `${response.config.method?.toUpperCase()} ${response.config.url}`,
        // );
        // console.log('Status :', response.status);
        // console.log('=================================\n');

        return response;
    },
    (error) => {

        // Buat Debugging ini 
        // console.log('\n========== API FAILED ==========');
        // console.log(
        //     `${error.config?.method?.toUpperCase()} ${error.config?.url}`,
        // );
        // console.log('Status :', error.response?.status);
        // console.log('Params :', error.config?.params);
        // console.log('Response :', error.response?.data);
        // console.log('Message :', error.message);
        // console.log('===============================\n');

        return Promise.reject(error);
    },
);