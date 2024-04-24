import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { oauthCallback } from './User';
import { setAccessToken } from './HttpUtil';
import { useAuth } from 'context/AuthContext';
import useRouter from 'hooks/useRouter';

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

const OAuth2RedirectHandler: React.FC = () => {
	const { signIn } = useAuth();
	const { provider } = useParams();
	const query = useQuery();
	const { moveMainPage, moveLoginPage } = useRouter();

	const code = query.get('code') ?? '';
	const token = query.get('token');
	// const error = query.get('error');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await oauthCallback(provider, code);
				console.log(response);
				setAccessToken(token || '');
				signIn(response);
				moveMainPage();
			} catch (err) {
				console.log(err);
				// navigate('/login', {
				// 	state: {
				// 		from: location,
				// 		error: error,
				// 	},
				// });
				moveLoginPage();
			}
		};

		fetchData();
	}, []);

	return null;
};

export default OAuth2RedirectHandler;
