import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}
	static getDrivedStateFromError(error) {
		console.error('12 ErrorBoundary: ', error);
		return {
			hasError: true,
		};
	}

	componentDidCatch(error, info) {
		this.setState({
			hasError: true,
		});
		console.error('22 ErrorBoundary: ', error, info);
	}
	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
	children: PropTypes.object.isRequired,
};
