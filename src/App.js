import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from './components/button';

import { Routers } from './pages/Routes';
import { ButtonBox, NavMenu } from './styles/GlobalStyles';

const App = () => {

	const user = useSelector(state => state.user.user);

	return (
		<>
			<NavMenu>
				<h1>{user.username}</h1>
				{user ? (
					<Link to={'/login'}>
						<Button>Logout</Button>
					</Link>
				): (
					<ButtonBox>
						<Link to={'/login'}>
							<Button styleColor={'primary'}>Login</Button>
						</Link>
						<Link to={'/registration'}>
							<Button styleColor={'primary'}>Registration</Button>
						</Link>
					</ButtonBox>
				)}
			</NavMenu>
			<Routers />
		</>
	);
};

export default App;
