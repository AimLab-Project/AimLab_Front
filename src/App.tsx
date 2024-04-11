import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import router from 'routes/router';
import theme from './styles/theme';
import GlobalStyles from 'styles/global';

export const queryClient = new QueryClient({});

const App: React.FC = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<RecoilRoot>
						<GlobalStyles />
						<RouterProvider router={router} />
					</RecoilRoot>
				</QueryClientProvider>
			</ThemeProvider>
		</>
	);
};

export default App;
