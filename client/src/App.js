import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Home } from './components';
import store from './store';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
	render() {
		return (
			<ErrorBoundary>
				<Provider store={store}>
					<div className="App">
						<Home />
					</div>
				</Provider>
			</ErrorBoundary>
		);
	}
}

export default App;
