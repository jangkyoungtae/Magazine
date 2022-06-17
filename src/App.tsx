/* eslint-disable react-hooks/rules-of-hooks */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import BoaderPage from './Pages/BoaderPage';
import LoginPage from './Pages/LoginPage';
import WriteBoard from './Pages/WriteBoard';
import PrivateRoute from './Components/PrivateRoutes';

const GlobalStyle = createGlobalStyle`
	body{
		background-color: #cecece;
		background-size: 100%;		
		height: 100vh;
	}	
`;

function App() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<BoaderPage />} />
					<Route path="/login" element={<LoginPage />}>
						<Route path=":signup" element={<LoginPage />} />
					</Route>
					<Route path="/write" element={<PrivateRoute path="/write" component={WriteBoard} />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
