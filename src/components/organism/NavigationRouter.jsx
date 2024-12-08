import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { LandingPage } from './screens/LandingPage';
import { Dashboard } from './screens/Dashboard';
import { LoginPage } from './screens/LoginPage';

const NavigationRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="*" element={<Navigate to="/" />} />
				<Route path="/dashboard" element={<Dashboard/>} />
				<Route path="/login" element={<LoginPage/>}/>
				<Route path="/signup" element={<LoginPage/>}/>
			</Routes>
		</Router>
	);
};

export default NavigationRouter;
