/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-param-reassign */
import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
	const localToken = localStorage.getItem('recoil-persist');
	if (localToken) {
		const toto = JSON.parse(localToken);
		if (toto.token !== '') {
			const toto2 = JSON.parse(toto.token);
			if (toto2) {
				config.headers = {
					Authorization: toto2.token || 0 || false,
					'Content-Type': 'application/json',
				};
			}
		}
	}
	return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
	// console.error(`[request error] [${JSON.stringify(error)}]`);
	return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
	// console.info(`[response] [${JSON.stringify(response)}]`);
	return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
	// console.error(`[response error] [${JSON.stringify(error)}]`);
	return Promise.reject(error);
};

export default function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
	axiosInstance.interceptors.request.use(onRequest, onRequestError);
	axiosInstance.interceptors.response.use(onResponse, onResponseError);
	return axiosInstance;
}
