import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';

const NotFound = () => <p>Page not found</p>
const ErrorBoundary = () => <p>Something went wrong</p>
const Loading = () => <p>Loading...</p>

const HomeView = lazy(() => import('./pages/home'));
const PostsView = lazy(() => import('./pages/posts'));
const DocumentationView = lazy(() => import('./pages/documentation'));

const App = () => {
	return (
		<Router>
			<Suspense fallback={<Loading />}>
				<Switch>
					<Route exact path="/" render={() => <Layout><HomeView /></Layout>} />
					<Route path="/posts" render={() => <Layout><PostsView /></Layout>} />
					<Route path="/documentation" render={() => <Layout><DocumentationView /></Layout>} />
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</Suspense>
		</Router>
	);
};

export default App;
