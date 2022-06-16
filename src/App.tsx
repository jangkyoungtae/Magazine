import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import BoaderPage from './Pages/BoaderPage';
import LoginPage from './Pages/LoginPage';
import WriteBoard from './Pages/WriteBoard';

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
			<RecoilRoot>
				<BrowserRouter>
					<GlobalStyle />
					<Routes>
						<Route path="/" element={<BoaderPage />} />
						<Route path="/login" element={<LoginPage />}>
							<Route path=":signup" element={<LoginPage />} />
						</Route>
						<Route path="/write" element={<WriteBoard />} />
					</Routes>
				</BrowserRouter>
			</RecoilRoot>
		</QueryClientProvider>
	);
}

export default App;
