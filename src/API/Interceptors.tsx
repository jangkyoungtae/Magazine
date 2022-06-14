/* eslint-disable no-param-reassign */
import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
	console.info(`[request] [${JSON.stringify(config)}]`);
	config.headers = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': '*',
		'Access-Control-Allow-Headers': '*',
		'Content-Type': 'application/json',
	};
	return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
	console.error(`[request error] [${JSON.stringify(error)}]`);
	return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
	// console.info(`[response] [${JSON.stringify(response)}]`);
	return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
	console.error(`[response error] [${JSON.stringify(error)}]`);
	return Promise.reject(error);
};

export default function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
	axiosInstance.interceptors.request.use(onRequest, onRequestError);
	axiosInstance.interceptors.response.use(onResponse, onResponseError);
	return axiosInstance;
}