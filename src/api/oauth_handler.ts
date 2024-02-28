import { LocalStorage } from 'common/LocalStorage';
import { ACCESS_TOKEN } from '../constants';
import { useLocation, useNavigate } from 'react-router-dom';

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

const OAuth2RedirectHandler: React.FC = () => {
	const query = useQuery();
	const navigate = useNavigate();
	const location = useLocation();

	const token = query.get('token');
	const error = query.get('error');

	if (token) {
		LocalStorage.set(ACCESS_TOKEN, token);
		navigate('/');
	} else {
		navigate('/login', {
			state: {
				from: location,
				error: error,
			},
		});
	}

	return null;
};

export default OAuth2RedirectHandler;
