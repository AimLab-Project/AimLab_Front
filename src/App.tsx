import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import router from 'routes/router'
import theme from './styles/theme'

export const queryClient = new QueryClient({})

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<RecoilRoot>
						<RouterProvider router={router} />
					</RecoilRoot>
				</QueryClientProvider>
			</ThemeProvider>
		</>
	)
}

export default App
