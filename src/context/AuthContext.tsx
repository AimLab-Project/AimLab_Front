import React, { ReactNode } from 'react';
import { User } from 'api/Protocol';
import { createContext, useState } from 'react';
import { removeAccessToken, setAccessToken } from 'api/HttpUtil';

interface AuthState {
	user: User;
}

interface AuthContextActions {
	signIn: (data: User) => void;
	signOut: () => void;
}

interface AuthContextType extends AuthState, AuthContextActions {}

const defaultUser: User = {
	access_token: '',
	user_id: '',
	user_email: '',
	user_nickname: '',
};

const AuthContext = createContext<AuthContextType>({
	user: defaultUser,
	signIn: () => {
		// Placeholder function
	},
	signOut: () => {
		// Placeholder function
	},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState(defaultUser);

	const signIn = (user: User) => {
		const { access_token } = user;
		setAccessToken(access_token);
		setUser(user);
	};
	const signOut = () => {
		removeAccessToken();
	};

	return (
		<AuthContext.Provider value={{ user, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = React.useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
