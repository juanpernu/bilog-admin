import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

const NotFound = () => <p>Page not found</p>
const ErrorBoundary = () => <p>Something went wrong</p>
const Loading = () => <p>Loading...</p>

const HomeView = lazy(() => import('./pages/home'));
const PostsView = lazy(() => import('./pages/posts'));
const DocumentationView = lazy(() => import('./pages/documentation'));

const App = () => {
	return (
		<Router>
			<Header />
			<Suspense fallback={<Loading />}>
				<Switch>
					<Route exact path="/" render={() => <HomeView />} />
					<Route path="/posts" render={() => <PostsView />} />
					<Route path="/documentation" render={() => <DocumentationView />} />
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</Suspense>
		</Router>
	);
};

export default App;
