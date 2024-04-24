/**
 * 삭제 예정
 */
import axios from 'axios';
import { LocalStorage } from '../common/LocalStorage';

// const BASE_URL = 'http://localhost:3000'; // 로컬
const BASE_URL = 'https://api.aimsharp.co.kr';

export default axios.create({
	baseURL: BASE_URL,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
});

function setAccessToken() {
	const accessToken = LocalStorage.get('access_token');
	axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}

// function removeAccessToken() {
// 	delete axios.defaults.headers.common['Authorization'];
// }

export async function get(
	url: string,
	callback: (error: any, successs: any) => void,
) {
	setAccessToken();
	try {
		const response = await axios.get(url);
		callback(null, response.data);
	} catch (err) {
		callback(err, null);
	}
}

export async function post(
	url: string,
	data: any,
	callback: (error: any, successs: any) => void,
) {
	setAccessToken();
	try {
		const response = await axios.post(url, data);
		callback(null, response.data);
	} catch (err) {
		callback(err, null);
	}
}
