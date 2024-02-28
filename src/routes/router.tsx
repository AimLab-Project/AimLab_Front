import MainLayout from 'components/layout/MainLayout';
import AuthPage from 'pages/AuthPage';
import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';
import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import OAuth2RedirectHandler from 'api/oauth_handler';

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
		],
	},
	{
		path: '/auth',
		element: <AuthPage />,
	},
	{
		path: '/*',
		element: <NotFoundPage />,
	},
	{
		path: '/oauth/redirect',
		element: <OAuth2RedirectHandler />,
	},
]);

export default router;
