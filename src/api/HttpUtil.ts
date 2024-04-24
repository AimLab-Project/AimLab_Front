import { LocalStorage } from 'common/LocalStorage';
import { ACCESS_TOKEN, API_BASE_URL } from '../constants';

export function setAccessToken(accessToken: string) {
	LocalStorage.set(ACCESS_TOKEN, accessToken);
}

export function getAccessToken() {
	return LocalStorage.get(ACCESS_TOKEN);
}

export function removeAccessToken() {
	LocalStorage.remove(ACCESS_TOKEN);
}

export type HttpRequestOption = {
	url: string;
	method: 'POST' | 'GET';
	body?: string;
};

export const HttpRequest = (option: HttpRequestOption) => {
	const headers = new Headers({
		'Content-Type': 'application/json',
	});

	if (LocalStorage.get(ACCESS_TOKEN)) {
		headers.append('Authorization', 'Bearer ' + getAccessToken());
	}

	const defaults = { headers: headers };
	option = Object.assign({}, defaults, option);

	return fetch(`${API_BASE_URL}${option.url}`, option).then(response =>
		response.json().then(json => {
			console.log(json);
			if (!response.ok || json.status !== 'success') {
				return Promise.reject(json);
			}
			return json.data;
		}),
	);
};
