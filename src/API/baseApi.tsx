import axios from 'axios';
import setupInterceptorsTo from './Interceptors';

const boaderApi = axios.create({
	// baseURL: 'http://codjaeho.shop/api',
	baseURL: `http://13.209.65.162/api`,
});

// http://34.197.218.191:8080/api/board 상훈님 url
export default setupInterceptorsTo(boaderApi);
