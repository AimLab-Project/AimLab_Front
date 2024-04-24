import { getAccessToken, HttpRequest as request } from './HttpUtil';
import {
	LoginRequest,
	ResponseLogin,
	ResponseSocialLoginPage,
	SignUpRequest,
} from './Protocol';
import { SocialLoginProvider } from 'components/ui/molecules/socialLoginButton/SocialLoginButton';

function wrapRequest(request) {
	return new Promise((resolve, reject) => {
		request()
			.then(data => {
				// if (data.code == "토큰 만료") {
				// 	return requestRefreshToken();
				// }
				resolve(data);
			})
			.catch(error => {
				console.error(error);
				resolve(null);
			});
	});
}

export function login(loginRequest: LoginRequest) {
	return wrapRequest(
		request({
			url: '/login',
			method: 'POST',
			body: JSON.stringify(loginRequest),
		}) as Promise<ResponseLogin>,
	);
}

export function signup(signupRequest: SignUpRequest) {
	return request({
		url: '/signup',
		method: 'POST',
		body: JSON.stringify(signupRequest),
	});
}

export function requestEmailVerification(email: string) {
	return request({
		url: '/email/verification',
		method: 'POST',
		body: JSON.stringify({ user_email: email }),
	});
}

export function confirmEmailVerification(
	email: string,
	code: string,
	key: string,
) {
	return request({
		url: '/email/verification/confirm',
		method: 'POST',
		body: JSON.stringify({
			user_email: email,
			verification_code: code,
			key,
		}),
	});
}

export function checkNickname(nickname: string) {
	return request({
		url: `/users/nickname/${nickname}`,
		method: 'GET',
	});
}

export function checkEmail(email: string) {
	return request({
		url: `/users/email/${email}`,
		method: 'GET',
	});
}

export function requestRefreshToken() {
	return request({
		url: '/token/refresh',
		method: 'POST',
		body: JSON.stringify({ token: getAccessToken() }),
	});
}

export function redirectToSocialLogin(provider: SocialLoginProvider) {
	return request({
		url: '/oauth/' + provider,
		method: 'GET',
	}) as Promise<ResponseSocialLoginPage>;
}

export function oauthCallback(provider: string | undefined, code: string) {
	return request({
		url: '/oauth/login/' + provider,
		method: 'POST',
		body: JSON.stringify({ code }),
	});
}
