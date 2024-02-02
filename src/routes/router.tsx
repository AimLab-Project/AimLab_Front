import MainLayout from 'components/layout/MainLayout';
import AuthPage from 'pages/AuthPage';
import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';
import { createBrowserRouter } from 'react-router-dom';
import React from 'react';

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
]);

export default router;
