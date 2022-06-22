import axios from 'axios';
import setupInterceptorsTo from './Interceptors';

const boaderApi = axios.create({
	// baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
	baseURL: 'http://15.164.171.58:8080/api',
});

// http://34.197.218.191:8080/api/board 상훈님 url
// http://13.125.145.83/api/board?page=1&size=3 건우님 url
// http://3.35.173.173/api 선현님url
// http://13.209.65.162/api 재호님url
// http://15.164.171.58:8080/api 주영님url
// http://sulbin.shop/api 신욱님 url

export default setupInterceptorsTo(boaderApi);
