import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './pages/error/404';
import ErrorBoundary from './pages/error';

const Loading = () => <p>Loading...</p>

const HomeView = lazy(() => import('./pages/home'));
const PostsView = lazy(() => import('./pages/posts'));
const DocumentationView = lazy(() => import('./pages/documentation'));

const App = () => {
	return (
		<Router>
			<ErrorBoundary>
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
			</ErrorBoundary>
		</Router>
	);
};

export default App;
