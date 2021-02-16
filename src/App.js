import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const NotFound = () => <p>Page not found</p>
const ErrorBoundary = () => <p>Something went wrong</p>
const Loading = () => <p>Loading...</p>

const HomeView = lazy(() => import('./pages/home'));

const App = () => {
	return (
		<Router>
			<Suspense fallback={<Loading/>}>
					<Switch>
						<Route exact path="/" render={() => <HomeView />} />
						<Route>
              <NotFound />
						</Route>
					</Switch>
				</Suspense>
		</Router>
	);
};

export default App;
