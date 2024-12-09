import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { LandingPage } from './screens/LandingPage';
import { Dashboard } from './screens/Dashboard';
import { About } from './screens/About';

const NavigationRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="*" element={<Navigate to="/" />} />
				<Route path="/dashboard" element={<Dashboard/>} />
				<Route path = "/about" element={<About/>} />
				<Route path="/login" />
			</Routes>
		</Router>
	);
};

export default NavigationRouter;
