import React from 'react';
import Theme from './providers/Theme';
import NavigationRouter from './components/organism/NavigationRouter';

const App = () => {
	return (
		<Theme>
			<NavigationRouter />
		</Theme>
	);
};

export default App;
