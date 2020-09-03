import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthState from './context/auth/AuthState';

ReactDOM.render(
	<Router>
		<AuthState>
			<App />
		</AuthState>
	</Router>,
	document.getElementById('root')
);
