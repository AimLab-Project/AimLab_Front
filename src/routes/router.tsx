import OAuth2RedirectHandler from 'api/OAuthHandler';
import MainLayout from 'components/layout/MainLayout';
import AuthPage from 'pages/AuthPage';
import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import OAuthPage from '../pages/OAuthPage';
import MyPage from 'pages/MyPage';

const router = createBrowserRouter(
	[
		{
			element: <MainLayout />,
			children: [
				{
					path: '/',
					element: <MainPage />,
				},
				{
					path: '/my',
					element: <MyPage />,
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
		{
			path: '/oauth/redirect',
			element: <OAuth2RedirectHandler />,
		},
	],
	{ basename: '/AimLab_Front' },
);

export default router;
