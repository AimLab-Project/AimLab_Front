import { LocalStorage } from 'common/LocalStorage';
import { ACCESS_TOKEN, API_BASE_URL } from '../constants';
import { LoginRequest, ResponseLogin, SignUpRequest } from './Protocol';

/**
 * TODO : 공용 API 로 뺌
 */
const request = (options: any) => {
	const headers = new Headers({
		'Content-Type': 'application/json',
	});

	if (LocalStorage.get(ACCESS_TOKEN)) {
		headers.append('Authorization', 'Bearer ' + LocalStorage.get(ACCESS_TOKEN));
	}

	const defaults = { headers: headers };
	options = Object.assign({}, defaults, options);

	return fetch(options.url, options).then(response =>
		response.json().then(json => {
			if (!response.ok) {
				return Promise.reject(json);
			}
			return json;
		}),
	);
};

// export function getCurrentUser() {
// 	if (!LocalStorage.get(ACCESS_TOKEN)) {
// 		return Promise.reject('No access token set.');
// 	}

// 	return request({
// 		url: API_BASE_URL + '/user/me',
// 		method: 'GET',
// 	});
// }

export function login(loginRequest: LoginRequest) {
	return request({
		url: API_BASE_URL + '/authenticate',
		method: 'POST',
		body: JSON.stringify(loginRequest),
	}) as Promise<ResponseLogin>;
}

export function signup(signupRequest: SignUpRequest) {
	return request({
		url: API_BASE_URL + '/signup',
		method: 'POST',
		body: JSON.stringify(signupRequest),
	});
}

export function requestEmailVerification(email: string) {
	return request({
		url: API_BASE_URL + '/email/verification',
		method: 'POST',
		body: JSON.stringify({ user_email: email }),
	});
}

export function confirmEmailVerification(email: string, code: string) {
	return request({
		url: API_BASE_URL + '/email/verification/confirm',
		method: 'POST',
		body: JSON.stringify({ user_email: email, verification_code: code }),
	});
}

export function checkNickname(nickname: string) {
	return request({
		url: API_BASE_URL + `/users/nickname/${nickname}`,
		method: 'GET',
	});
}

export function checkEmail(email: string) {
	return request({
		url: API_BASE_URL + `/users/email/${email}`,
		method: 'GET',
	});
}

/**
 * accessToken 만료 시 서버에서 에러 발생
 * 에러 코드 ?
 * 에러 핸들링 시 requestRefreshToken 호출 및 accessToken 갱신
 */

export function requestRefreshToken(token: string) {
	return request({
		url: API_BASE_URL + '/token/refresh',
		method: 'POST',
		body: JSON.stringify({ token: token }),
	});
}

export function logout() {
	LocalStorage.remove(ACCESS_TOKEN);
}
