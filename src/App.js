import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { logoutUser } from './store/actions/user';
import { GET_USER } from './store/actions/user/types';

import Button from './components/button';

import { Routers } from './pages/Routes';

import { NavMenu } from './styles/GlobalStyles';

const App = () => {

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const user = useSelector(state => state.user.user);

	useEffect(() => {
		dispatch({ type: GET_USER });
	},[]);

	const goToLoginPage = useCallback(() => navigate('/login'));

	const logout = () => {
		dispatch(logoutUser());
		goToLoginPage();
		console.log('goodbay');
	};

	return (
		<>
			<NavMenu>
				<h1>{user.username}</h1>
				{user ? (
					<Button onClick={() => logout()}>Logout</Button>
				): (
					<Link to={'/registration'}>
						<Button styleColor={'primary'}>Registration</Button>
					</Link>
				)}
			</NavMenu>
			<Routers />
		</>
	);
};

export default App;
