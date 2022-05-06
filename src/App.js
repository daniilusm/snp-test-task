import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { logoutUser } from './store/actions/user';
import { GET_USER } from './store/actions/user/types';

import Button from './components/button';
import Modal from './components/modal';

import { Routers } from './pages/Routes';

import { ConfirmBox, NavMenu, Heading, ButtonBox } from './styles/GlobalStyles';

const App = () => {

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const [openModalСonfirm, setOpenModalСonfirm] = useState(false);

	const user = useSelector(state => state.user.user);

	useEffect(() => {
		dispatch({ type: GET_USER });
	},[]);

	const goToLoginPage = useCallback(() => navigate('/login'));

	const logout = () => {
		dispatch(logoutUser());
		setOpenModalСonfirm((prev) => !prev);
		goToLoginPage();
		console.log('goodbay');
	};

	return (
		<>
			<NavMenu>
				<h1>{user.username}</h1>
				{user ? (
					<Button onClick={() => setOpenModalСonfirm((prev) => !prev)}>Logout</Button>
				): (
					<Link to={'/registration'}>
						<Button styleColor={'primary'}>Registration</Button>
					</Link>
				)}
			</NavMenu>
			<Routers />
			<Modal showModal={openModalСonfirm} setShowModal={setOpenModalСonfirm}>
				<ConfirmBox>
					<Heading>Logout?</Heading>
					<ButtonBox>
						<Button type='button' styleColor={'primary'} onClick={() => logout()}>yes</Button>
						<Button type='button' styleColor={'primary'} onClick={() => setOpenModalСonfirm((prev) => !prev)}>no</Button>
					</ButtonBox>
				</ConfirmBox>
			</Modal>
		</>
	);
};

export default App;
