import React, { useState } from 'react';

import Modal from './components/modal';
import LoginPage from './pages/login-page';
import TestsListPage from './pages/tests-list-page';
import WorkOnTestPage from './pages/work-on-test-page';

import Button from './components/button';
import { QuestionForm } from './components/question-form/question-form';
import RegisterPage from './pages/register-page';

const App = () => {
	
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<RegisterPage />
			<LoginPage />
			<TestsListPage />
			<WorkOnTestPage />
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
