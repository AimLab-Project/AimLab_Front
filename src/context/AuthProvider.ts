// import { User } from 'api/protocol';
// import React, { useContext, useState } from 'react';

// const initialUser: User = {
// 	user_id: 'test_id',
// 	user_email: 'test@example.com',
// 	user_nickname: 'test_user',
// };

// export const AuthContext = useContext<{
// 	auth: User;
// 	setAuth: React.Dispatch<React.SetStateAction<User>>;
// }>({
// 	auth: initialUser,
// 	setAuth: () => {},
// });

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
// 	const [auth, setAuth] = useState<User>(initialUser);

// 	return <AuthContext.Provider>{children}</AuthContext.Provider>;
// };
// //
