import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { LandingPage } from './screens/LandingPage';

const NavigationRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="*" element={<Navigate to="/" />} />
				<Route path="/dashboard" />
				<Route path="/login" />
			</Routes>
		</Router>
	);
};

export default NavigationRouter;
