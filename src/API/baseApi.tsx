import axios from 'axios';
import setupInterceptorsTo from './Interceptors';

const boaderApi = axios.create({
	baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
});

// http://34.197.218.191:8080/api/board 상훈님 url
export default setupInterceptorsTo(boaderApi);
