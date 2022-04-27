import React, { useState } from 'react';

import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
// import TestsListPage from './pages/tests-list-page';
// import WorkOnTestPage from './pages/work-on-test-page';

import Button from './components/button';
import Modal from './components/modal';
import QuestionForm from './components/question-form/';

const App = () => {
	
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<RegisterPage />
			<LoginPage />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}
			>
				<Button styleColor={'primary'} onClick={() => setShowModal((prev) => !prev)}>Open Modal</Button>
			</div>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<QuestionForm />
			</Modal>
		</>
	);
};

export default App;
