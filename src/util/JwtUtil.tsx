import jwtDecode from 'jwt-decode';
import { ITokenDecode } from '../Types/boaderType';

export default class jwtUtils {
	static isAuth(token: string) {
		if (!token) {
			return false;
		}
		const decoded: ITokenDecode = jwtDecode(token);
		if (decoded.exp > new Date().getTime() / 1000) {
			return true;
		}
		return false;
	}

	static getId(token: string) {
		const decoded: ITokenDecode = jwtDecode(token);
		return decoded.userid;
	}
}
