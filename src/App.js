import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundary from './pages/error';

const NotFound = () => <p>Page not found</p>
const Loading = () => <p>Loading...</p>

const HomeView = lazy(() => import('./pages/home'));
const PostsView = lazy(() => import('./pages/posts'));
const DocumentationView = lazy(() => import('./pages/documentation'));
const PostView = lazy(() => import('./pages/post'));

const App = () => {
	return (
		<Router>
			<Suspense fallback={<Loading />}>
				<Switch>
					<Route exact path="/" render={() => <HomeView />} />
					<Route path="/posts" render={() => <PostsView />} />
					<Route path="/documentation" render={() => <DocumentationView />} />
					<Route path="/post" render={() => <PostView />} />
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</Suspense>
		</Router>
	);
};

export default App;
