import { LocalStorage } from 'common/LocalStorage';
import { ACCESS_TOKEN } from '../constants';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { oauthCallback } from './user_api';

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

const OAuth2RedirectHandler: React.FC = () => {
	const { provider } = useParams();
	const query = useQuery();
	const navigate = useNavigate();
	const location = useLocation();

	const code = query.get('code') ?? '';
	const token = query.get('token');
	const error = query.get('error');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await oauthCallback(provider, code);
				console.log(response);
				LocalStorage.set(ACCESS_TOKEN, token);
				navigate('/');
			} catch (err) {
				console.log(err);
				navigate('/login', {
					state: {
						from: location,
						error: error,
					},
				});
			}
		};

		fetchData();
	}, []);

	return null;
};

export default OAuth2RedirectHandler;
