import OAuth2RedirectHandler from 'api/oauth_handler';
import MainLayout from 'components/layout/MainLayout';
import AuthPage from 'pages/AuthPage';
import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import OAuthPage from '../pages/OAuthPage';

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
		path: '/auth/:page',
		element: <AuthPage />,
	},
	{
		path: '/oauth',
		element: <OAuthPage />,
	},
	{
		path: '/:provider/callback',
		element: <OAuth2RedirectHandler />,
	},
	{
		path: '/*',
		element: <NotFoundPage />,
	},
]);

export default router;
